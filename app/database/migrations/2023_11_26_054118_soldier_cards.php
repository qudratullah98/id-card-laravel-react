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
        Schema::create('employee_cards', function (Blueprint $table) {
            $table->id();
            $table->integer('employee_id');
            $table->integer('general_department_id');
            $table->integer('department_id');
            $table->integer('rank_id');
            $table->string('bast');
            $table->integer('province_id'); // Issue Place
            $table->date('issue_date');
            $table->date('expire_date');
            $table->string('photo')->nullable();
            $table->integer('card_type_id');
            $table->integer('status')->default(1);
            $table->string('remarks')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
