<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = json_decode(file_get_contents(public_path('files/cities.json')), true);

        foreach (array_chunk($json, 1000) as $chunk) {
            City::insert($chunk);
        }
    }
}
