<?php

namespace Database\Seeders;

use App\Models\General\BloodGroup;
use Illuminate\Database\Seeder;

class BloodGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bgs = [
            ['blood_group' => 'Not specified'],
            ['blood_group' => 'A+'],
            ['blood_group' => 'A-'],
            ['blood_group' => 'B+'],
            ['blood_group' => 'B-'],
            ['blood_group' => 'O+'],
            ['blood_group' => 'O-'],
            ['blood_group' => 'AB+'],
            ['blood_group' => 'AB-'],
        ];

        foreach ($bgs as $bg) {

            BloodGroup::create($bg);
        }
    }
}
