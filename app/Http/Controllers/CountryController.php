<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\country;
use App\Traits\countryTrait;
use App\Http\Requests\CountryCreateRequest;
use Illuminate\Support\Facades\Session;

class CountryController extends Controller
{
    use countryTrait;
    public function getCountries()
    {
        $country = country::orderby('name_rus', 'asc')->paginate(3);
        return view('admin.countries', ['countries'=>$country]);
    }
    public function startCreateCountry()
    {
        return view('admin.newCountry');
    }
    public function createCountry(CountryCreateRequest $request)
    {
        if ($request->validated()) {
            $result = $this->addCountry($request);
            $result == true ? Session::flash('success', 'Страна '.$request->get('name_rus').' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
            return redirect('countries');
        }
        return redirect()->back();
    }
    public function startEdit(Request $request, $id)
    {
        $country = country::find($id);
        return view('admin.editCountry', ['country'=>$country]);
    }
    public function editCountry(CountryCreateRequest $request, $id)
    {
        if ($request->validated()) {
            $result = $this->editCountryPost($request, $id);
            $result == true ? Session::flash('success', 'Страна '.$request->get('name_rus').' успешно обновлено')
                : Session::flash('error', 'Произошла ошибка, обратитесь к разработчику сайта!');
            return redirect('countries');
        }
        return redirect('countries');
    }
    public function dropCountry(Request $req, $id)
    {
        $this->deleteCountry($id) == true ? Session::flash('success', 'Страна успешно удалена')
        : Session::flash('error', 'Ошибка при удалении');
        return redirect()->back();
    }
}
