<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

use Exception;
use Illuminate\Support\Facades\Storage;

class SoldierController extends Controller
{
    protected array $sortFields = [
        'lecturers.designation',
        'lecturers.faculty_id',
        'lecturers.program_id',
        'lecturers.first_name',
        'lecturers.last_name',
        'lecturers.lecturer_work_base',
        'lecturers.first_nationality_id',
        'lecturers.second_nationality_id',
        'lecturers.gender_id',
        'lecturers.specialized',
        'lecturers.degree_id',
        'lecturers.lecturer_payment_type_id',
        'lecturers.salary',
        'lecturers.phone_no',
        'lecturers.email',
        'lecturers.address',
        'lecturers.city',
        'lecturers.country_id',
        'lecturers.date_of_birth',
        'lecturers.joining_date',
        'lecturers.end_date',
        'lecturers.about_lecturer'
    ];

    protected function index(Request $request)
    {
        $sortFieldInput = $request->input('sort_field', self::DEFAULT_SORT_FIELD);
        $sortField      = in_array($sortFieldInput, $this->sortFields) ? $sortFieldInput : self::DEFAULT_SORT_FIELD;
        $sortOrder      = $request->input('sort_order', self::DEFAULT_SORT_ORDER);
        $query          = Employee::select(
                                'employees.id',
                                'employees.first_name',
                                'employees.last_name',
                                'employees.father_name',
                                'employees.date_of_birth',
                            )
                            ->orderBy($sortField, $sortOrder);

        $perPage    = $request->input('per_page') ?? self::PER_PAGE;
        $record     = $query->paginate((int)$perPage);
        return EmployeeResource::collection($record);
    }

    protected function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'first_name'            => ['required', 'string'],
            'last_name'             => ['required', 'string'],
            'father_name'           => ['required', 'string'],
            'grand_father_name'     => ['required', 'string'],
            'first_name_en'         => ['required', 'string'],
            'last_name_en'          => ['required', 'string'],
            'father_name_en'        => ['required', 'string'],
            'grand_father_name_en'  => ['required', 'string'],
            'date_of_birth'         => ['required', 'date'],
            'blood_group_id'        => ['required', 'string'],
            'eye_color_id'          => ['required', 'string'],
            'hair_color_id'         => ['required', 'string'],
            'height'                => ['required', 'numeric'],
            'weight'                => ['required', 'numeric'],
            'marital_status_id'     => ['required', 'string'],
            'nic'                   => ['required', 'numeric'],
            'nic_type'              => ['required', 'string'],
            'national_volume_no'    => ['required', 'numeric'],
            'national_page_no'      => ['required', 'numeric'],
            'national_record_no'    => ['required', 'numeric'],
            'nationality_id'        => ['required', 'numeric'],
            'mother_language_id'    => ['required', 'numeric'],
            'distinctive_mark'      => ['required', 'string'],
            'province_id'           => ['required', 'numeric'],
            'district_id'           => ['required', 'numeric'],
            'village'               => ['required', 'string'],
            'current_province_id'   => ['required', 'numeric'],
            'current_district_id'   => ['required', 'numeric'],
            'current_village'       => ['required', 'string'],
            'phone_number'          => ['required', 'numeric'],
            'rank_id'               => ['required', 'numeric'],
            'unit_id'               => ['required', 'numeric'],
            'department_id'         => ['required', 'numeric'],
            'position_id'           => ['required', 'numeric'],
            'relative_type_id'      => ['required', 'numeric'],
            'relative_name'         => ['required', 'string'],
            'relative_phone_number' => ['required', 'numeric'],
            'educational_level_id'  => ['required', 'numeric'],
            'country_id'            => ['required', 'numeric'],
            'previous_card_number'  => ['required', 'numeric'],
            'tcn'                   => ['required', 'string'],
            'gender_id'             => ['required', 'numeric'],
            'date_of_innovation'    => ['required', 'date']
        ]);

        if ($validator->fails()) {
            return json_encode($validator->errors()->toArray());
        }

        // dd($request->all());

        DB::beginTransaction();
        try {
            $store = new Employee();
            $store->first_name = $request->first_name;
            $store->last_name = $request->last_name;
            $store->father_name = $request->father_name;
            $store->grand_father_name = $request->grand_father_name;
            $store->first_name_en = $request->first_name_en;
            $store->last_name_en = $request->last_name_en;
            $store->father_name_en = $request->father_name_en;
            $store->grand_father_name_en = $request->grand_father_name_en;
            $store->date_of_birth = $request->date_of_birth;
            $store->place_of_birth = 1; // Remain
            $store->blood_group_id = $request->blood_group_id;
            $store->eye_color_id = $request->eye_color_id;
            $store->hair_color_id = $request->hair_color_id;
            $store->height = $request->height;
            $store->weight = $request->weight;
            $store->marital_status = $request->marital_status_id;
            $store->nic = $request->nic;
            $store->nic_type = $request->nic_type;
            $store->national_volume_no = $request->national_volume_no;
            $store->national_page_no = $request->national_page_no;
            $store->national_record_no = $request->national_record_no;
            $store->nation_id = $request->nationality_id;
            $store->native_language_id = $request->mother_language_id;
            $store->distinctive_mark = $request->distinctive_mark;
            $store->permanent_province_id = $request->province_id;
            $store->permanent_district_id = $request->district_id;
            $store->permanent_village = $request->village;
            $store->current_province_id = $request->current_province_id;
            $store->current_district_id = $request->current_district_id;
            $store->current_village = $request->current_village;
            $store->phone_number = $request->phone_number;

            $store->relative_id = $request->relative_type_id;
            $store->relative_name = $request->relative_name;
            $store->relative_phone_number = $request->relative_phone_number;

            $store->previous_card_number = $request->previous_card_number;
            $store->TCN_number = $request->tcn;
            $store->gender_id = $request->gender_id;
            $store->date_of_innovation = $request->date_of_innovation;
            $store->employee_full_id = 'MOI-Employee-ID'; // Remain
            $store->save();

            // $store->rank_id = $request->rank_id;
            // $store->unit_id = $request->unit_id;
            // $store->department_id = $request->department_id;
            // $store->position_id = $request->position_id;

            // $store->educational_level_id = $request->educational_level_id;
            // $store->country_id = $request->country_id;

            DB::commit();

            return response()->json('Employee Enrolled Successfuly!');
        } catch (Exception $e) {
            DB::rollBack();
            dd($e);
            return false;
        }
    }
}
