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
        Schema::table('attachments', function (Blueprint $table) {
            $table->dropColumn('attachmentable_type');
            $table->dropColumn('attachmentable_id');
            $table->dropColumn('position');
            $table->dropColumn('rank');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('attachments', function (Blueprint $table) {
            $table->string('attachmentable_type')->nullable()->after('id');
            $table->unsignedInteger('attachmentable_id')->nullable()->after('attachmentable_type');
            $table->string('position')->nullable()->after('url');
            $table->integer('rank')->nullable()->after('position');
        });
    }
};
