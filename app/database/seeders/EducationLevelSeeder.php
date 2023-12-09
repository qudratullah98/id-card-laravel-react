<?php

namespace Database\Seeders;

use App\Models\General\EducationLevel;
use Illuminate\Database\Seeder;

class EducationLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $edu_levels = [
            [
                "name_dr" => "متوسطه",
                "name_ps" => "متوسطه",
                "name_en" => "Medium Level"
            ],
            [
                "name_dr" => "بکلوریا",
                "name_ps" => "بکلوریا",
                "name_en" => "High School"
            ],
            [
                "name_dr" => "14 پاس",
                "name_ps" => "14 پاس",
                "name_en" => "Colleague"
            ],
            [
                "name_dr" => "لیسانس",
                "name_ps" => "لیسانس",
                "name_en" => "Bachelor"
            ],
            [
                "name_dr" => "ماستر",
                "name_ps" => "ماستر",
                "name_en" => "Master"
            ],
            [
                "name_dr" => "دوکتورا",
                "name_ps" => "دوکتورا",
                "name_en" => "Doctoral"
            ]
        ];

        foreach ($edu_levels as $edu_level) {

            EducationLevel::create($edu_level);
        }
    }
}
