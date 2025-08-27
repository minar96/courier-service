<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;

class UserRoleSeeder extends Seeder
{
    public function run(): void
    {
        // Create roles if not exists
        $roles = ['admin', 'deliveryman', 'user'];

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role]);
        }

        // Create Admin
        $admin = User::firstOrCreate(
            ['mobile_no' => '01711111111'], // unique field
            [
                'name' => 'Super Admin',
                'mobile_no'   => '01711111111',
                'password' => Hash::make('password123'),
            ]
        );
        $admin->assignRole('admin');

        // Create Deliveryman
        $deliveryman = User::firstOrCreate(
            ['mobile_no' => '01811111111'],
            [
                'name' => 'Delivery Man',
                'mobile_no'   => '01811111111',
                'password' => Hash::make('password123'),
            ]
        );
        $deliveryman->assignRole('deliveryman');

        // Create Normal User
        $user = User::firstOrCreate(
            ['mobile_no' => '01911111111'],
            [
                'name' => 'Test User',
                'mobile_no'   => '01911111111',
                'password' => Hash::make('password123'),
            ]
        );
        $user->assignRole('user');
    }
}
