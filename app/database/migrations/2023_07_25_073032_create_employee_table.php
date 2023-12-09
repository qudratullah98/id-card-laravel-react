<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name', 60);
            $table->string('last_name', 60);
            $table->string('father_name', 60);
            $table->string('grand_father_name', 60);
            $table->string('first_name_en', 60);
            $table->string('last_name_en', 60);
            $table->string('father_name_en', 60);
            $table->string('grand_father_name_en', 60);
            $table->date('date_of_birth');
            $table->integer('place_of_birth');
            $table->integer('gender_id');
            $table->integer('blood_group_id');
            $table->integer('eye_color_id');
            $table->integer('hair_color_id');
            $table->integer('weight')->nullable();
            $table->integer('height');
            $table->string('distinctive_mark')->nullable();
            $table->enum('marital_status', ['مجرد', 'متاهل']);
            $table->integer('nation_id');
            $table->integer('permanent_province_id');
            $table->integer('permanent_district_id');
            $table->string('permanent_village', 100);
            $table->integer('current_province_id');
            $table->integer('current_district_id');
            $table->string('current_village', 100);
            $table->integer('native_language_id');
            $table->string('phone_number', 10);
            $table->integer('relative_id');
            $table->string('relative_name', 60);
            $table->string('relative_phone_number', 10)->nullable();
            $table->enum('nic_type', ['کاغذی', 'الکترونیکی']);
            $table->string('nic')->nullable();
            $table->string('national_volume_no')->nullable();
            $table->string('national_page_no')->nullable();
            $table->string('national_record_no')->nullable();
            $table->string('TCN_number')->unique()->nullable();
            $table->date('date_of_innovation')->nullable();
            $table->string('employee_full_id');
            $table->string('previous_card_number')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
};
