<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\CountryCreateRequest;
use App\Interfaces\IServices\ICountryService;

/**
 * Контроллер для работы со странами вин в кабинете администратора
 *
 * Предоставляет методы для работы с сущностью "страны вин"
 *
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 KremCafe
 */
class CountryController extends Controller
{
    private $countryService;

    public function __construct(ICountryService $countryService)
    {
        $this->countryService = $countryService;
    }

    /**
     * Получение страницы со списком стран
     */
    public function getCountries()
    {
        $country = Country::orderby('name_rus', 'asc')->paginate(6);
        return view('admin.countries', ['countries' => $country]);
    }

    /**
     * GET-запрос на получение страницы для создания страны
     */
    public function startCreateCountry()
    {
        return view('admin.newCountry');
    }

    /**
     * POST-запрос для создания страны
     *
     * @param CountryCreateRequest $request - Запрос на создание страны
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function createCountry(CountryCreateRequest $request)
    {
        if ($request->validated()) {
            $created = $this->countryService->createCountry($request->all());
            $created ? Session::flash('success', 'Страна ' . $request->get('name_rus') . ' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
            return redirect('countries');
        }
        return redirect()->back();
    }

    /**
     * GET-запрос на получение страницы для редактирования страны
     * @param Request $request - Запрос на редактирование страны
     * @param $id - номер страны
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function startEdit(Request $request, $id)
    {
        $country = Country::find($id);
        return view('admin.editCountry', ['country' => $country]);
    }

    /**
     * POST - запрос редактирования страны
     *
     * @param CountryCreateRequest $request - Запрос на редактирование страны
     * @param $id - номер страны
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function editCountry(CountryCreateRequest $request, int $id)
    {
        if ($request->validated()) {
            $edited = $this->countryService->editCountryPost($request->all(), $id);
            $edited ? Session::flash('success', 'Страна ' . $request->get('name_rus') . ' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
            return redirect('countries');
        }
        return redirect('countries');
    }

    /**
     * POST-запрос на удаление страны
     *
     * @param int $id - номер страны
     * @return \Illuminate\Http\RedirectResponse
     */
    public function dropCountry(int $id)
    {
        $deleted = $this->countryService->deleteCountry($id);
        $deleted ? Session::flash('success', 'Страна успешно удалена')
            : Session::flash('error', 'Ошибка при удалении');
        return redirect()->back();
    }
}
