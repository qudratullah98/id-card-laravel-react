<?php

namespace Database\Seeders;

use App\Models\General\Relative;
use Illuminate\Database\Seeder;

class RelativeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $relatives = [
            [
                "name_dr" => "برادر",
                "name_ps" => "ورور",
                "name_en" => "brother"
            ],
            [
                "name_dr" => "پسر برادر",
                "name_ps" => "وراره",
                "name_en" => "brother's son"
            ],
            [
                "name_dr" => "ماما",
                "name_ps" => "ماما",
                "name_en" => "uncle"
            ],
            [
                "name_dr" => "پسر ماما",
                "name_ps" => "ماما زوی",
                "name_en" => "uncle's son"
            ],
            [
                "name_dr" => "کاکا",
                "name_ps" => "تره",
                "name_en" => "uncle"
            ],
            [
                "name_dr" => "پسر کاکا",
                "name_ps" => "تره زوی",
                "name_en" => "uncle's son"
            ],
            [
                "name_dr" => "شوهر همشیره",
                "name_ps" => "اوشی",
                "name_en" => "sister's husband"
            ],
            [
                "name_dr" => "خواهر زاده",
                "name_ps" => "خوریی",
                "name_en" => "neice"
            ],
            [
                "name_dr" => "شوهر عمه",
                "name_ps" => "عمه میره",
                "name_en" => "Aunt's husband"
            ],
            [
                "name_dr" => "پسر عمه",
                "name_ps" => "عمه زوی",
                "name_en" => "Aunt's son"
            ],
            [
                "name_dr" => "شوهر خاله",
                "name_ps" => "خاله میره",
                "name_en" => "Aunt's husband"
            ],
            [
                "name_dr" => "پسر خاله",
                "name_ps" => "ترور زوی",
                "name_en" => "Aunt's son"
            ],
            [
                "name_dr" => "خسر",
                "name_ps" => "خسر",
                "name_en" => "Father Inlaw"
            ],
            [
                "name_dr" => "خسر بره",
                "name_ps" => "خسربره",
                "name_en" => "father inlaw's son"
            ],
            [
                "name_dr" => "شهرت شوهر( طبقه اناث)",
                "name_ps" => "د میره شهرت (شخینه طبقه)",
                "name_en" => "husband details(Female Only)"
            ],
            [
                "name_dr" => "دوست",
                "name_ps" => "ملگری",
                "name_en" => "Friend"
            ],
            [
                "name_dr" => "همکار",
                "name_ps" => "همکار",
                "name_en" => "Colleague"
            ],
            [
                "name_dr" => "همسایه",
                "name_ps" => "همسایه",
                "name_en" => "Neighbor"
            ]
        ];
        foreach ($relatives as $relative) {

            Relative::create($relative);
        }
    }
}
