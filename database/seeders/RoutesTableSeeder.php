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
        DB::table('routes')->insert([
            [
                'departure_city' => 'Jakarta',
                'arrival_city' => 'Bandung',
                'cost' => 150000.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'departure_city' => 'Jakarta',
                'arrival_city' => 'Semarang',
                'cost' => 300000.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'departure_city' => 'Bandung',
                'arrival_city' => 'Yogyakarta',
                'cost' => 280000.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'departure_city' => 'Surabaya',
                'arrival_city' => 'Malang',
                'cost' => 100000.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'departure_city' => 'Semarang',
                'arrival_city' => 'Solo',
                'cost' => 80000.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}