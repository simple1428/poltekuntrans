<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FleetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('fleets')->insert([
            [
                'fleet_number' => Str::random(10),
                'model' => 'Mercedes-Benz Sprinter',
                'capacity' => 20,
                'status' => 'available',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'fleet_number' => Str::random(10),
                'model' => 'Toyota Coaster',
                'capacity' => 22,
                'status' => 'available',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'fleet_number' => Str::random(10),
                'model' => 'Isuzu Elf',
                'capacity' => 18,
                'status' => 'maintenance',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}