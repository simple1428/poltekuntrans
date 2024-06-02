<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchedulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Sample departure times
        $departureTimes = [
            '2024-06-10 08:00:00',
            '2024-06-11 10:00:00',
            '2024-06-12 12:00:00',
            '2024-06-13 14:00:00',
            '2024-06-14 16:00:00',
        ];

        // Get all route and fleet IDs
        $routeIds = DB::table('routes')->pluck('id')->toArray();
        $fleetIds = DB::table('fleets')->pluck('id')->toArray();

        foreach ($departureTimes as $departureTime) {
            // Randomly select a route and fleet ID
            $randomRouteId = $routeIds[array_rand($routeIds)];
            $randomFleetId = $fleetIds[array_rand($fleetIds)];

            // Generate a random status (true for active, false for inactive)
            $status = (bool)random_int(0, 1);

            // Insert the schedule record
            DB::table('schedules')->insert([
                'route_id' => $randomRouteId,
                'fleet_id' => $randomFleetId,
                'departure_time' => $departureTime,
                'status' => $status,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}