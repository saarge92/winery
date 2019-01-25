<?php
namespace App\Traits;

use Illuminate\Support\Facades\Session;
use App\DisplayPaginator;

/**
 * Trait для работы с пагинацией вина
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait paginateTrait
{
    /**
     * Функция для получения количества пагинируемых страниц
     * 
     * @param $request - параметр запроса
     * @return $paginate_number - количество страниц
     */
    public function getPaginateNumber($request) : int
    {
        $paginate_number = DisplayPaginator::where('num', '!=', 0)->min('num');
        if ($request->has('perPage')) {
            $paginate_number = $request->get('perPage');
            Session::put('paginate_number', $paginate_number);
        } else {
            if (Session::has('paginate_number')) {
                $paginate_number = Session::get('paginate_number');
            } else {
                Session::put('paginate_number', $paginate_number);
            }
        }
        return $paginate_number;
    }
}
