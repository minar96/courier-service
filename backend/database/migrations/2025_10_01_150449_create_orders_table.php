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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('receiver_id')->constrained()->cascadeOnDelete();

            $table->string('tracking_no')->unique();
            $table->decimal('shipping_fee', 20, 2)->default(0);
            $table->decimal('cod_amount', 20, 2)->default(0);
            $table->longText('notes')->nullable();
            $table->string('product_category');
            $table->longText('product_details');
            $table->timestamp('order_date');
            $table->timestamp('picked_at')->nullable();
            $table->timestamp('delivered_at')->nullable();
            $table->string('status')->default('pending');
            $table->softDeletes('deleted_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
