<?php

namespace App\Services;

use App\Interfaces\IFileUploadService;
use Illuminate\Http\UploadedFile;

class FileUploadService implements IFileUploadService
{
    public function uploadFile(UploadedFile $file, string $folder, ?string $name = null): string
    {
        if ($name)
            $fileName = $name . '_' . date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();
        else
            $fileName = date('Y_m_d H_i_s') . '.' . $file->getClientOriginalExtension();

        $destination = public_path() . $folder;
        $file->move($destination, $fileName);
        return $fileName;
    }

    public function deleteFile(string $file): void
    {
        $deletePath = public_path() . '/storage/' . $file;
        if (file_exists($deletePath)) {
            unlink($deletePath);
        }
    }
}