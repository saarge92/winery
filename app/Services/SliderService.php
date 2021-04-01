<?php

namespace App\Services;

use App\Interfaces\IFileUploadService;
use App\Interfaces\IServices\ISliderService;
use App\Interfaces\IRepositories\ISliderRepository;
use App\Slider;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;


/**
 * Сервис для работы с сущностью "Слайдер"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class SliderService implements ISliderService
{
    private ISliderRepository $sliderRepository;
    private IFileUploadService $fileUploadService;

    private const FOLDER_TO_STORE = '/storage/sliders/';

    public function __construct(ISliderRepository $sliderRepository, IFileUploadService $fileUploadService)
    {
        $this->sliderRepository = $sliderRepository;
        $this->fileUploadService = $fileUploadService;
    }

    public function createSlider(array $createParams): bool
    {
        $content = $createParams['content'];
        $fileName = $this->fileUploadService->uploadFile($createParams['src_image'], self::FOLDER_TO_STORE, $content);
        $imageForStore = 'sliders/' . $fileName;
        $isActive = $createParams['is_active'] == "1";
        return $this->sliderRepository->addSlider($content, $imageForStore, $isActive);
    }

    /**
     * @param Request $request
     * @param int $id
     * @return bool
     * @throws \Exception
     */
    public function editSlider(Request $request, int $id): bool
    {
        $slider = $this->sliderRepository->getSliderById($id);
        if ($slider) {
            $content = $request->get('content');
            $isActive = $request->get('is_active') == "1";
            $file = $request->file('src_image');
            $imagePath = $slider->src_image;
            $filename = '';
            try {
                if (isset($file)) {
                    $filename = $this->fileUploadService->uploadFile($file, self::FOLDER_TO_STORE, $content);
                    $this->fileUploadService->deleteFile($slider->src_image);
                    $imagePath = 'sliders/' . $filename;
                }
                return $this->sliderRepository->editSlider($slider, $content, $imagePath, $isActive);
            } catch (\Exception $exception) {
                $this->fileUploadService->deleteFile($filename);
                throw new \Exception($exception);
            }
        }
        return false;
    }

    public function deleteSlider(int $id): bool
    {
        $slider = Slider::find($id);
        if ($slider) {
            $this->fileUploadService->deleteFile($slider->src_image);
            return $this->sliderRepository->deleteSlider($slider);
        }
        return false;
    }

    public function getAllPaginated(): LengthAwarePaginator
    {
        return $this->sliderRepository->getSliderPaginated();
    }
}
