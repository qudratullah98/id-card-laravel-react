<?php

namespace Database\Seeders;

use App\Models\General\Nation;
use Illuminate\Database\Seeder;

class NationalitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nationalities = [
            [
                "name_dr" => "پښتون",
                "name_ps" => "پښتون",
                "name_en" => "Pashtoon"
            ],
            [
                "name_dr" => "تاجک",
                "name_ps" => "تاجک",
                "name_en" => "Tajik"
            ],
            [
                "name_dr" => "هزاره",
                "name_ps" => "هزاره",
                "name_en" => "Hazara"
            ],
            [
                "name_dr" => "اوزبیک",
                "name_ps" => "اوزبیک",
                "name_en" => "Uzbik"
            ],
            [
                "name_dr" => "ترکمن",
                "name_ps" => "ترکمن",
                "name_en" => "Turkman"
            ],
            [
                "name_dr" => "بلوچ",
                "name_ps" => "بلوچ",
                "name_en" => "Balooch"
            ],
            [
                "name_dr" => "پشهیی",
                "name_ps" => "پشهیی",
                "name_en" => "Pashayee"
            ],
            [
                "name_dr" => "ایماق",
                "name_ps" => "ایماق",
                "name_en" => "Aymaq"
            ],
            [
                "name_dr" => "نورستاني",
                "name_ps" => "نورستاني",
                "name_en" => "Nooristani"
            ],
            [
                "name_dr" => "عرب",
                "name_ps" => "عرب",
                "name_en" => "Arab"
            ],
            [
                "name_dr" => "قرغیز",
                "name_ps" => "قرغیز",
                "name_en" => "Qirghiz"
            ],
            [
                "name_dr" => "قزلباش",
                "name_ps" => "قزلباش",
                "name_en" => "Qizilbash"
            ],
            [
                "name_dr" => "گوجر",
                "name_ps" => "گوجر",
                "name_en" => "Goujar"
            ],
            [
                "name_dr" => "براهوی",
                "name_ps" => "براهوی",
                "name_en" => "Barahawi"
            ],
            [
                "name_dr" => "اهلهنود",
                "name_ps" => "اهلهنود",
                "name_en" => "Hanood"
            ],
            [
                "name_dr" => "سیکان",
                "name_ps" => "سیکان",
                "name_en" => "Sikan"
            ],
            [
                "name_dr" => "سادات",
                "name_ps" => "سادات",
                "name_en" => "Sadat"
            ],
            [
                "name_dr" => "اورمړ",
                "name_ps" => "اورمړ",
                "name_en" => "Awmir"
            ],
            [
                "name_dr" => "پراچی",
                "name_ps" => "پراچی",
                "name_en" => "Parachi"
            ],
            [
                "name_dr" => "کرد",
                "name_ps" => "کرد",
                "name_en" => "Kurd"
            ],
            [
                "name_dr" => "جوگی",
                "name_ps" => "جوگی",
                "name_en" => "Jugi"
            ],
            [
                "name_dr" => "شاخیلان",
                "name_ps" => "شاخیلان",
                "name_en" => "Shakhilan"
            ],
            [
                "name_dr" => "شیخمحمدروحانی",
                "name_ps" => "شیخمحمدروحانی",
                "name_en" => "ShaikMohammad Rohani"
            ],
            [
                "name_dr" => "گوار",
                "name_ps" => "گوار",
                "name_en" => "Guara"
            ],
            [
                "name_dr" => "خلیلی",
                "name_ps" => "خلیلی",
                "name_en" => "Khalili"
            ],
            [
                "name_dr" => "پامیری",
                "name_ps" => "پامیری",
                "name_en" => "Pamiry"
            ],
            [
                "name_dr" => "منجانی",
                "name_ps" => "منجانی",
                "name_en" => "Manjani"
            ],
            [
                "name_dr" => "سنگلیچی",
                "name_ps" => "سنگلیچی",
                "name_en" => "Sangchili"
            ],
            [
                "name_dr" => "اشکاشمی",
                "name_ps" => "اشکاشمی",
                "name_en" => "Ishkashimi"
            ],
            [
                "name_dr" => "روشنایی",
                "name_ps" => "روشنایی",
                "name_en" => "Roshnayee"
            ],
            [
                "name_dr" => "واخانی",
                "name_ps" => "واخانی",
                "name_en" => "Wakhani"
            ],
            [
                "name_dr" => "شغنانی",
                "name_ps" => "شغنانی",
                "name_en" => "Shighnani"
            ],
            [
                "name_dr" => "ترک",
                "name_ps" => "ترک",
                "name_en" => "Turn"
            ],
            [
                "name_dr" => "قرلق",
                "name_ps" => "قرلق",
                "name_en" => "Qurluq"
            ],
            [
                "name_dr" => "تاتار",
                "name_ps" => "تاتار",
                "name_en" => "Tatar"
            ],
            [
                "name_dr" => "مغول",
                "name_ps" => "مغول",
                "name_en" => "Mughul"
            ],
            [
                "name_dr" => "ساکایی",
                "name_ps" => "ساکایی",
                "name_en" => "Sakayee"
            ],
            [
                "name_dr" => "دولتخانی",
                "name_ps" => "دولتخانی",
                "name_en" => "Dawlat Khani"
            ],
            [
                "name_dr" => "تایمنی",
                "name_ps" => "تایمنی",
                "name_en" => "Taimani"
            ],
            [
                "name_dr" => "البیگ",
                "name_ps" => "البیگ",
                "name_en" => "Albig"
            ],
            [
                "name_dr" => "قزاق",
                "name_ps" => "قزاق",
                "name_en" => "Qazaq"
            ],
            [
                "name_dr" => "سجانی",
                "name_ps" => "سجانی",
                "name_en" => "Sajani"
            ],
            [
                "name_dr" => "غزنویان",
                "name_ps" => "غزنویان",
                "name_en" => "Ghanawi"
            ],
            [
                "name_dr" => "قوشخانیان",
                "name_ps" => "قوشخانیان",
                "name_en" => "Qushkhani"
            ],
            [
                "name_dr" => "بیات",
                "name_ps" => "بیات",
                "name_en" => "Bayat"
            ],
            [
                "name_dr" => "نیماق",
                "name_ps" => "نیماق",
                "name_en" => "Nimaq"
            ],
            [
                "name_dr" => "قبچاق",
                "name_ps" => "قبچاق",
                "name_en" => "Qabchaq"
            ],
            [
                "name_dr" => "نیکپی",
                "name_ps" => "نیکپی",
                "name_en" => "Nikpi"
            ],
            [
                "name_dr" => "کهگداری",
                "name_ps" => "کهگداری",
                "name_en" => "Kahgudari"
            ],
            [
                "name_dr" => "دایمیرک",
                "name_ps" => "دایمیرک",
                "name_en" => "Daimirak"
            ],
            [
                "name_dr" => "میرسیده",
                "name_ps" => "میرسیده",
                "name_en" => "Mirsida"
            ],
            [
                "name_dr" => "جمشیدیان",
                "name_ps" => "جمشیدیان",
                "name_en" => "Jamshidyan"
            ],
            [
                "name_dr" => "افشاریان",
                "name_ps" => "افشاریان",
                "name_en" => "Afsharyan"
            ],
            [
                "name_dr" => "طاهریان",
                "name_ps" => "طاهریان",
                "name_en" => "Tahiryan"
            ],
            [
                "name_dr" => "سلجوقی",
                "name_ps" => "سلجوقی",
                "name_en" => "Saljuqi"
            ],
            [
                "name_dr" => "تیموریان",
                "name_ps" => "تیموریان",
                "name_en" => "Timoryan"
            ],
            [
                "name_dr" => "برلاس-ارلات",
                "name_ps" => "برلاس-ارلات",
                "name_en" => "Barlas"
            ],
            [
                "name_dr" => "ایلخانی",
                "name_ps" => "ایلخانی",
                "name_en" => "Eil khani"
            ],
            [
                "name_dr" => "یفتلی",
                "name_ps" => "یفتلی",
                "name_en" => "Yaftali"
            ],
            [
                "name_dr" => "لقیان",
                "name_ps" => "لقیان",
                "name_en" => "Luqyan"
            ],
            [
                "name_dr" => "کاوی",
                "name_ps" => "کاوی",
                "name_en" => "Kawi"
            ],
            [
                "name_dr" => "قوزی",
                "name_ps" => "قوزی",
                "name_en" => "Quzi"
            ],
            [
                "name_dr" => "ابکه",
                "name_ps" => "ابکه",
                "name_en" => "Abka"
            ],
            [
                "name_dr" => "جغتایی",
                "name_ps" => "جغتایی",
                "name_en" => "Jaghtai"
            ],
            [
                "name_dr" => "گره‌یی",
                "name_ps" => "گره‌یی",
                "name_en" => "Gura yee"
            ],
            [
                "name_dr" => "کرمعلی",
                "name_ps" => "کرمعلی",
                "name_en" => "Karam ali"
            ],
            [
                "name_dr" => "شیخعلی",
                "name_ps" => "شیخعلی",
                "name_en" => "ShaikhAli"
            ],
            [
                "name_dr" => "اورتهبلاقی",
                "name_ps" => "اورتهبلاقی",
                "name_en" => "Ortahblaqi"
            ],
            [
                "name_dr" => "اویغور",
                "name_ps" => "اویغور",
                "name_en" => "Oyghor"
            ],
            [
                "name_dr" => "بابریان",
                "name_ps" => "بابریان",
                "name_en" => "Baburyan"
            ],
            [
                "name_dr" => "فرملی",
                "name_ps" => "فرملی",
                "name_en" => "Furmuly"
            ]
        ];

        foreach ($nationalities as $nationlity) {
            Nation::create($nationlity);
        }
    }
}
