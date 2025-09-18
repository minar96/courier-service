<?php

namespace Database\Seeders;

use App\Models\State;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = json_decode(file_get_contents(public_path('files/states.json')), true);

        foreach (array_chunk($json, 1000) as $chunk) {
            State::insert($chunk);
        }
    }
}
