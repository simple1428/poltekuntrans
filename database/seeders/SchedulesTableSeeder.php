<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchedulesTableSeeder extends Seeder
{

    public function run(): void
    {
        // Sample departure dates
        $departureDates = [
            '2024-06-3',
            '2024-06-10',
            '2024-06-10',
            '2024-06-10',
            '2024-06-11',
            '2024-06-11',
            '2024-06-11',
            '2024-06-11',
            '2024-06-11',
            '2024-06-11',
            '2024-06-11',
            '2024-06-12',
            '2024-06-12',
            '2024-06-12',
            '2024-06-12',
            '2024-06-12',
            '2024-06-12',
            '2024-06-13',
            '2024-06-13',
            '2024-06-13',
            '2024-06-13',
            '2024-06-13',
            '2024-06-14',
            '2024-06-14',
            '2024-06-14',
            '2024-06-14',
        ];

        // Get all route and fleet IDs
        $routeIds = DB::table('routes')->pluck('id')->toArray();
        $fleetIds = DB::table('fleets')->pluck('id')->toArray();

        foreach ($departureDates as $departureDate) {
            // Randomly select a route and fleet ID
            $randomRouteId = $routeIds[array_rand($routeIds)];
            $randomFleetId = $fleetIds[array_rand($fleetIds)];
            $capacity = DB::table('fleets')->where('id', $randomFleetId)->value('capacity');

            // Generate a random status (true for active, false for inactive)
            $status = (bool)random_int(0, 1);

            // Insert the schedule record
            DB::table('schedules')->insert([
                'route_id' => $randomRouteId,
                'fleet_id' => $randomFleetId,
                'departure_time' => $departureDate,
                'capacity' => $capacity,
                'status' => $status,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}