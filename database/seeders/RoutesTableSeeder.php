<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoutesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Daftar kota
        $cities = [
            'Jakarta',
            'Bandung',
            'Semarang',
            'Yogyakarta',
            'Surabaya',
            'Malang',
            'Solo',
        ];

        // Biaya dasar untuk setiap rute
        $baseCost = 100000; // Contoh biaya dasar

        // Kombinasi rute dari semua kota kecuali kota yang sama
        $routes = [];
        foreach ($cities as $departureCity) {
            foreach ($cities as $arrivalCity) {
                if ($departureCity !== $arrivalCity) {
                    $routes[] = [
                        'departure_city' => $departureCity,
                        'arrival_city' => $arrivalCity,
                        'cost' => $baseCost + rand(0, 200000), // Biaya acak antara 100000 dan 300000
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];
                }
            }
        }

        // Insert data ke tabel routes
        DB::table('routes')->insert($routes);
    }
}