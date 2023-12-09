<?php

namespace Database\Seeders;

use App\Models\General\Gender;
use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $gender = [
            ['name_en' => 'Male', 'name_dr' =>    'ذکور', 'name_ps' => 'نارینه'],
            ['name_en' => 'Female', 'name_dr' =>    'اناث', 'name_ps' => 'ښځینه'],
            ['name_en' => 'Male | Female', 'name_dr' => 'ذکور | اناث', 'name_ps' => 'نارینه | ښځینه'],
        ];

        foreach ($gender as $gender) {
            Gender::create($gender);
        }
    }
}
