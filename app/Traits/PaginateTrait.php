<?php
namespace App\Traits;

use Illuminate\Support\Facades\Session;

/**
 * Trait для работы с пагинацией вина
 * 
 * @author Serdar Durdyev <sarage92@mail.ru>
 * @copyright Copyright (c) 2019 BarHouse
 */
trait PaginateTrait
{
    public function getPaginateNumber(\Illuminate\Http\Request $request) : int
    {
        $paginate_number = \App\DisplayPaginator::where('num', '!=', 0)->min('num');
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
