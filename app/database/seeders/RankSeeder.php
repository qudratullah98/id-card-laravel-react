<?php

namespace Database\Seeders;

use App\Models\General\Rank;
use Illuminate\Database\Seeder;

class RankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ranks = [
            ['name_en' => 'General', 'name_ps' => 'سترپاسوال', 'rank_type' => 1],
            ['name_en' => 'Lieutenant General', 'name_ps' => 'لوی پاسوال', 'rank_type' => 1],
            ['name_en' => 'Major General', 'name_ps' => 'پاسوال', 'rank_type' => 1],
            ['name_en' => 'Brigadier General', 'name_ps' => 'مل پاسوال', 'rank_type' => 1],
            ['name_en' => 'Colonel', 'name_ps' => 'سمونوال', 'rank_type' => 1],
            ['name_en' => 'Lieutenant Colonel', 'name_ps' => 'سمونمل', 'rank_type' => 1],
            ['name_en' => 'Major', 'name_ps' => 'سمونیار', 'rank_type' => 1],
            ['name_en' => 'Captain', 'name_ps' => 'څارمن', 'rank_type' => 1],
            ['name_en' => '1st Lieutenant', 'name_ps' =>   'لمړی څارن', 'rank_type' => 1],
            ['name_en' => '2nd Lieutenant', 'name_ps' => 'دوهم څارن', 'rank_type' => 1],
            ['name_en' => '1st Sergeant', 'name_ps' => 'لمړی ساتنمن', 'rank_type' => 1],
            ['name_en' => '2nd Sergeant', 'name_ps' => 'دوهم ساتنمن', 'rank_type' => 1],
            ['name_en' => '3rd Sergeant', 'name_ps' => 'دریم ساتنمن', 'rank_type' => 1],
            ['name_en' => '1st Patrolman', 'name_ps' => 'لمړی ساتونکی', 'rank_type' => 1],
            ['name_en' => '2nd Patrolman', 'name_ps' => 'دوهم ساتونکی', 'rank_type' => 1],
            ['name_en' => 'Out of Rank', 'name_ps' => 'خارج رتبه', 'rank_type' => 2],
            ['name_en' => 'over Rank', 'name_ps' => 'مافوق رتبه', 'rank_type' => 2],
            ['name_en' => 'Above Rank', 'name_ps' => 'فوق رتبه', 'rank_type' => 2],
            ['name_en' => 'Grade 1', 'name_ps' => 'اول', 'rank_type' => 2],
            ['name_en' => 'Grade 2', 'name_ps' => 'دوم', 'rank_type' => 2],
            ['name_en' => 'Grade 3', 'name_ps' => 'سوم', 'rank_type' => 2],
            ['name_en' => 'Grade 4', 'name_ps' => 'چهارم', 'rank_type' => 2],
            ['name_en' => 'Grade 5', 'name_ps' => 'پنجم', 'rank_type' => 2],
            ['name_en' => 'Grade 6', 'name_ps' => 'ششم', 'rank_type' => 2],
            ['name_en' => 'Grade 7', 'name_ps' => 'هفتم', 'rank_type' => 2],
            ['name_en' => 'Grade 8', 'name_ps' => 'هشتم', 'rank_type' => 2],
            ['name_en' => 'General', 'name_ps' => 'مجاهد سترپاسوال', 'rank_type' => 3],
            ['name_en' => 'Lieutenant General', 'name_ps' => 'مجاهد لوی پاسوال', 'rank_type' => 3],
            ['name_en' => 'Major General', 'name_ps' => 'مجاهد پاسوال', 'rank_type' => 3],
            ['name_en' => 'Brigadier General', 'name_ps' => 'مجاهد مل پاسوال', 'rank_type' => 3],
            ['name_en' => 'Colonel', 'name_ps' => 'مجاهد سمونوال', 'rank_type' => 3],
            ['name_en' => 'Lieutenant Colonel', 'name_ps' => 'مجاهد سمونمل', 'rank_type' => 3],
            ['name_en' => 'Major', 'name_ps' => 'مجاهد سمونیار', 'rank_type' => 3],
            ['name_en' => 'Captain', 'name_ps' => 'مجاهد څارمن', 'rank_type' => 3],
            ['name_en' => '1st Lieutenant', 'name_ps' =>   'مجاهد لمړی څارن', 'rank_type' => 3],
            ['name_en' => '2nd Lieutenant', 'name_ps' => 'مجاهد دوهم څارن', 'rank_type' => 3],
            ['name_en' => '1st Sergeant', 'name_ps' => 'مجاهد لمړی ساتنمن', 'rank_type' => 3],
            ['name_en' => '2nd Sergeant', 'name_ps' => 'مجاهد دوهم ساتنمن', 'rank_type' => 3],
            ['name_en' => '3rd Sergeant', 'name_ps' => 'مجاهد دریم ساتنمن', 'rank_type' => 3],
            ['name_en' => '1st Patrolman', 'name_ps' => 'مجاهد لمړی ساتونکی', 'rank_type' => 3],
            ['name_en' => '2nd Patrolman', 'name_ps' => 'مجاهد دوهم ساتونکی', 'rank_type' => 3],
            ['name_en' => 'Out of Rank', 'name_ps' => 'مجاهد خارج رتبه', 'rank_type' => 4],
            ['name_en' => 'over Rank', 'name_ps' => 'مجاهد مافوق رتبه', 'rank_type' => 4],
            ['name_en' => 'Above Rank', 'name_ps' => 'مجاهد فوق رتبه', 'rank_type' => 4],
            ['name_en' => 'Grade 1', 'name_ps' => 'مجاهد اول', 'rank_type' => 4],
            ['name_en' => 'Grade 2', 'name_ps' => 'مجاهد دوم', 'rank_type' => 4],
            ['name_en' => 'Grade 3', 'name_ps' => 'مجاهد سوم', 'rank_type' => 4],
            ['name_en' => 'Grade 4', 'name_ps' => 'مجاهد چهارم', 'rank_type' => 4],
            ['name_en' => 'Grade 5', 'name_ps' => 'مجاهد پنجم', 'rank_type' => 4],
            ['name_en' => 'Grade 6', 'name_ps' => 'مجاهد ششم', 'rank_type' => 4],
            ['name_en' => 'Grade 7', 'name_ps' => 'مجاهد هفتم', 'rank_type' => 4],
            ['name_en' => 'Grade 8', 'name_ps' => 'مجاهد هشتم', 'rank_type' => 4],
        ];

        foreach ($ranks as $rank) {

            Rank::create($rank);
        }
    }
}
