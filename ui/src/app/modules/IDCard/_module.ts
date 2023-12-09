export interface LecturerForm {
    rank_id: string
    general_department_id: string
    department_id: string
    position_id: string
    educational_level_id: string
    country_id: string
}

export const initialValues: LecturerForm = {
    rank_id: '',
    general_department_id: '',
    department_id: '',
    position_id: '',
    educational_level_id: '',
    country_id: '',
}