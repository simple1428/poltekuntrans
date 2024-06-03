<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::create(
            [
                'name' => 'Muhamad Misbahudin',
                'email' => 'misbahudin1428@gmail.com',
                'phone' => '6289619080300',
                'password' => bcrypt('A7051892b'),
                'role'=> 1
            ]
            );
        $this->call([
            FleetsTableSeeder::class,
            RoutesTableSeeder::class,
            SchedulesTableSeeder::class,
        ]);
    }
}