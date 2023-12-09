<?php

namespace Database\Seeders;

use App\Models\General\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mls = [
            [
                "name_dr" => "دری",
                "name_ps" => "دری",
                "name_en" => "Dari"
            ],
            [
                "name_dr" => "پښتو",
                "name_ps" => "پښتو",
                "name_en" => "Pashto"
            ],
            [
                "name_dr" => "انگلیسی",
                "name_ps" => "انگلیسی",
                "name_en" => "English"
            ],
            [
                "name_dr" => "عربی",
                "name_ps" => "عربی",
                "name_en" => "Arabic"
            ],
            [
                "name_dr" => "هندی",
                "name_ps" => "هندی",
                "name_en" => "Hindi"
            ],
            [
                "name_dr" => "اردو",
                "name_ps" => "اردو",
                "name_en" => "Urdu"
            ],
            [
                "name_dr" => "اوزبیکی",
                "name_ps" => "اوزبیکی",
                "name_en" => "Uzbeki"
            ]
        ];

        foreach ($mls as $ml) {

            Language::create($ml);
        }
    }
}
