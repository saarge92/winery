<?php

namespace App\Repositories;

use App\sweet;

class SweetRepository
{
    public function getSweetNameById(int $id): ?string
    {
        $sweet = sweet::find($id);
        if ($sweet) return $sweet->name;
        return null;
    }
}
