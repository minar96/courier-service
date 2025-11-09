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
        Schema::create('attachments', function (Blueprint $table) {
            $table->id();
            // Polymorphic relation fields
            $table->string('attachmentable_type');
            $table->unsignedBigInteger('attachmentable_id');

            // File info
            $table->string('url');       // ফাইল path
            $table->string('alt')->nullable();
            $table->string('position')->nullable();
            $table->integer('rank')->nullable();

            // Index for polymorphic relation
            $table->timestamps();
            $table->index(['attachmentable_type', 'attachmentable_id'], 'attachments_attachable_index');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attachments');
    }
};
