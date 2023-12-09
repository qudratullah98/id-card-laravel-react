<?php

namespace App\Http\Controllers;

use App\Models\General\BloodGroup;
use App\Models\General\Color;
use App\Models\General\Country;
use App\Models\General\District;
use App\Models\General\EducationLevel;
use App\Models\General\Gender;
use App\Models\General\Language;
use App\Models\General\Nation;
use App\Models\General\Province;
use App\Models\General\Rank;
use App\Models\General\Relative;
use Illuminate\Http\Request;

class LookupController extends Controller
{
    protected function getCreateDropDownData()
    {
        $data['genders'] = Gender::get(['id', 'name_dr as name']);
        $data['blood_groups'] = BloodGroup::get(['id', 'blood_group as name']);
        $data['provinces'] = Province::get(['id', 'name_dr as name']);
        $data['colors'] = Color::get(['id', 'name_dr as name']);
        $data['nationalities'] = Nation::get(['id', 'name_dr as name']);
        $data['ranks'] = Rank::get(['id', 'name_ps as name']);
        $data['countries'] = Country::get(['id', 'name_dr as name']);
        $data['languages'] = Language::get(['id', 'name_dr as name']);
        $data['educational_levels'] = EducationLevel::get(['id', 'name_dr as name']);
        $data['relatives'] = Relative::get(['id', 'name_dr as name']);

        return response()->json($data, 200);
    }

    protected function getDistrictByProvinceId($province_id)
    {
        $data = District::where('province_id', $province_id)->get(['id', 'name_dr as name']);

        return response()->json($data, 200);
    }
}
