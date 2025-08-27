<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('access_token', 255)->nullable()->after('remember_token');
            $table->string('refresh_token', 255)->nullable()->after('access_token');
            $table->timestamp('refresh_token_expires_at')->nullable()->after('refresh_token');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'access_token',
                'refresh_token',
                'refresh_token_expires_at'
            ]);
        });
    }
};
