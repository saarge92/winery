<?php
namespace App\Traits;
use Illuminate\Support\Facades\Session;

trait paginateTrait
{
    public function getPaginateNumber($request) : int
    {
        $paginate_number = 9;
        if($request->has('perPage'))
        {
            $paginate_number = $request->get('perPage');
            Session::put('paginate_number',$paginate_number);
        }
        else
        {
            if(Session::has('paginate_number'))
            {
                $paginate_number = Session::get('paginate_number');
            }
            else
            {
                Session::put('paginate_number',$paginate_number);
            }
        }
        // dd($paginate_number);
        return $paginate_number;
    }
}
