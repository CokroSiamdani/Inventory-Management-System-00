<?php

namespace App\Exports;

use App\Staff;
use Maatwebsite\Excel\Concerns\FromCollection;

class StaffExcel implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Staff::all();
    }
}
