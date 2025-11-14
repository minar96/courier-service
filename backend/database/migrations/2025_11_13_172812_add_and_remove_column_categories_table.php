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
        Schema::table('categories', function (Blueprint $table) {
            $table->dropForeign('categories_parent_id_foreign');
            $table->dropColumn('parent_id');
            $table->dropColumn('description_en');
            $table->dropColumn('description_bn');
            $table->unsignedBigInteger('file_id')->nullable()->after('slug');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn('file_id');
            $table->text('description_en')->nullable()->after('slug');
            $table->text('description_bn')->nullable()->after('description_en');
            $table->unsignedBigInteger('parent_id')->nullable()->after('code');

            $table->foreign('parent_id')->references('id')->on('categories')->nullOnDelete();
        });
    }
};
