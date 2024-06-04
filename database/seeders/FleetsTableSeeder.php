<?php

namespace Database\Seeders;

use GuzzleHttp\Client;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Storage;

class FleetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_@#$%&*'; // Define character pool for fleet numbers

        $imageDir = 'public/images/fleets'; // Path to store images
        $carImageUrl = 'https://loremflickr.com/640/480/bus'; // Replace with your car image API

        for ($i = 0; $i < 10; $i++) {
            $fleetNumber = generateUniqueFleetNumber($characters);
            $model = random_fleet_model();
            $capacity = random_capacity();
            $status = random_status();

            // Generate random image name
            $imageName = Str::random(10) . '.jpg';

            // Download a random car image using Guzzle
            $client = new Client();
            $response = $client->get($carImageUrl);

            // Check for successful response
            if ($response->getStatusCode() == 200) {
                $imageData = $response->getBody();

                // Store the image in the filesystem
                Storage::put($imageDir . '/' . $imageName, $imageData);
            } else {
                // Handle potential image download failure (e.g., log error)
                echo "Failed to download image for fleet number $fleetNumber\n";
            }

            DB::table('fleets')->insert([
                'fleet_number' => $fleetNumber,
                'model' => $model,
                'capacity' => $capacity,
                'status' => $status,
                'image' => '/images/fleets/' . $imageName, // Store image path in database
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

    }
}

function generateUniqueFleetNumber($characters)
{
    $prefix = 'PLT-'; // Fleet number prefix

    while (true) {
        // Generate random 4-digit number
        $randomDigits = str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);

        $fleetNumber = $prefix . $randomDigits;

        $fleetExists = DB::table('fleets')->where('fleet_number', $fleetNumber)->exists();

        if (!$fleetExists) {
            return $fleetNumber;
        }
    }
}

function random_fleet_model()
{
    $models = [
        'Mercedes-Benz Sprinter',
        'Toyota Coaster',
        'Ford Transit',
        'Iveco Daily',
        'Nissan Civilian',
    ];
    return $models[array_rand($models)]; // Get random model from array
}

function random_capacity()
{
    return rand(15, 30); // Generate random capacity between 15 and 30
}

function random_status()
{
    $statuses = ['available', 'maintenance', 'rented'];
    return $statuses[array_rand($statuses)]; // Get random status from array
}