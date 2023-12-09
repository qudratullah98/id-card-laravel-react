<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PermissionTableSeeder::class,
            UsersSeeder::class,
            RankSeeder::class,
            GenderSeeder::class,
            BloodGroupSeeder::class,
            ColorSeeder::class,
            RelativeSeeder::class,
            EducationLevelSeeder::class,
            CountrySeeder::class,
            NationalitySeeder::class,
            LanguageSeeder::class,
            ProvinceSeeder::class
        ]);
    }
}
