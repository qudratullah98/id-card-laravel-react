<?php

namespace App\Models\General;

use App\Models\General\Jalb_o_Jazb\Contractual\Contractual_employee;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EducationLevel extends Model
{
    use HasFactory;


    public function contractual_employees()
    {
        return $this->hasMany(Contractual_employee::class, 'education_level', 'id');

    }
}
