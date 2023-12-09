<?php

namespace Database\Seeders;

use App\Models\General\Color;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colors = [
            [
                "name_dr" => "سیاه",
                "name_ps" => "سیاه",
                "name_en" => "black"
            ],
            [
                "name_dr" => "زرد",
                "name_ps" => "زرد",
                "name_en" => "yellow"
            ],
            [
                "name_dr" => "خرمایی",
                "name_ps" => "خرمایی",
                "name_en" => "brown"
            ],
            [
                "name_dr" => "سرخ",
                "name_ps" => "سرخ",
                "name_en" => "red"
            ],
            [
                "name_dr" => "خاکستری",
                "name_ps" => "خاکستری",
                "name_en" => "gray"
            ],
            [
                "name_dr" => "مشکی",
                "name_ps" => "مشکی",
                "name_en" => "dar gray"
            ],
            [
                "name_dr" => "آبی",
                "name_ps" => "آبی",
                "name_en" => "blue"
            ],
            [
                "name_dr" => "سبز",
                "name_ps" => "سبز",
                "name_en" => "green"
            ],
            [
                "name_dr" => "فندقی",
                "name_ps" => "فندقی",
                "name_en" => "pistachio"
            ],
            [
                "name_dr" => "سفید",
                "name_ps" => "سفید",
                "name_en" => "white"
            ],
            [
                "name_dr" => "دیگر",
                "name_ps" => "دیگر",
                "name_en" => "other"
            ]
        ];

        foreach ($colors as $color) {

            Color::create($color);
        }
    }
}
