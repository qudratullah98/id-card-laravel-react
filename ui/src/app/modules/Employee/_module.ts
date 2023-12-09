export interface LecturerForm {
    id: number
    first_name: string
    last_name: string
    father_name: string
    grand_father_name: string
    first_name_en: string
    last_name_en: string
    father_name_en: string
    grand_father_name_en: string
    date_of_birth: string
    place_of_birth: string
    blood_group_id: string
    eye_color_id: string
    hair_color_id: string
    height: string
    weight: string
    marital_status_id: string
    nic: string
    nic_type: string

    national_volume_no: string
    national_page_no: string
    national_record_no: string

    nationality_id: string
    mother_language_id: string
    distinctive_mark: string
    province_id: string
    district_id: string
    village: string
    current_province_id: string
    current_district_id: string
    current_village: string
    phone_number: string
    rank_id: string
    unit_id: string
    department_id: string
    position_id: string
    relative_type_id: string
    relative_name: string
    relative_phone_number: string
    educational_level_id: string
    country_id: string
    previous_card_number: string
    tcn: string
    gender_id: string
    date_of_innovation: string
}

export const initialValues: LecturerForm = {
    id: 0,
    first_name: '',
    last_name: '',
    father_name: '',
    grand_father_name: '',
    first_name_en: '',
    last_name_en: '',
    father_name_en: '',
    grand_father_name_en: '',
    date_of_birth: '',
    place_of_birth: '',
    blood_group_id: '',
    eye_color_id: '',
    hair_color_id: '',
    height: '',
    weight: '',
    marital_status_id: '',
    nic: '',
    nic_type: '',
    national_volume_no: '',
    national_page_no: '',
    national_record_no: '',
    nationality_id: '',
    mother_language_id: '',
    distinctive_mark: '',
    province_id: '',
    district_id: '',
    village: '',
    current_province_id: '',
    current_district_id: '',
    current_village: '',
    phone_number: '',
    rank_id: '',
    unit_id: '',
    department_id: '',
    position_id: '',
    relative_type_id: '',
    relative_name: '',
    relative_phone_number: '',
    educational_level_id: '',
    country_id: '',
    previous_card_number: '',
    tcn: '',
    gender_id: '',
    date_of_innovation: ''
}

export const marital_statuses = [
    {
        id: 1,
        name: 'مجرد'
    },
    {
        id: 2,
        name: 'متاهل'
    }
];

export const national_id_types = [
    {
        id: 1,
        name: 'کاغذی'
    },
    {
        id: 2,
        name: 'الکترونیکی'
    }
];