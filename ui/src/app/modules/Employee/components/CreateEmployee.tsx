import axios from 'axios'
import {useEffect, useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {initialValues, marital_statuses, national_id_types} from '../_module'
import {useIntl} from 'react-intl'
import {Link, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import clsx from 'clsx'
import {useFormik} from 'formik'
import CustomeSelect from '../../../custom/CustomeSelect'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from '../../../custom/persian_fa'
import Loader from '../../../pages/loader/Loader'

const CreateEmployee = () => {
  const intl = useIntl()

  const [loader, setLoader] = useState(true)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: ''})}
      )
    ),
    last_name: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.LAST_NAME'}, {name: ''})}
      )
    ),
    father_name: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.FATHER_NAME'}, {name: ''})}
      )
    ),
    grand_father_name: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.GRAND_FATHER_NAME'}, {name: ''})}
      )
    ),
    first_name_en: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: '(English)'})}
      )
    ),
    last_name_en: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: '(English)'})}
      )
    ),
    father_name_en: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: '(English)'})}
      )
    ),
    grand_father_name_en: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: '(English)'})}
      )
    ),
    date_of_birth: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.DATE_OF_BIRTH'})}
      )
    ),
    blood_group_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.BLOOD_GROUP'})}
      )
    ),
    eye_color_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.EYE_COLOR'})}
      )
    ),
    hair_color_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.HAIR_COLOR'})}
      )
    ),
    height: Yup.number().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.HEIGHT'})}
      )
    ),
    weight: Yup.number().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.WEIGHT'})}
      )
    ),

    marital_status_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.MARITAL_STATUS'})}
      )
    ),

    nic: Yup.string().required(
      intl.formatMessage({id: 'VALIDATION.REQUIRE'}, {name: intl.formatMessage({id: 'FORM.NIC'})})
    ),

    nic_type: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.NIC_TYPE'})}
      )
    ),
    nationality_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.NATIONALITY'})}
      )
    ),
    mother_language_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.MOTHER_LANGUAGE'})}
      )
    ),
    distinctive_mark: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.DISTINCTIVE_MARK'})}
      )
    ),

    province_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.PROVINCE'})}
      )
    ),
    district_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.DISTRICT'})}
      )
    ),
    village: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.VILLAGE'})}
      )
    ),
    current_province_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.CURRENT_PROVINCE'})}
      )
    ),
    current_district_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.CURRENT_DISTRICT'})}
      )
    ),
    current_village: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.CURRENT_VILLAGE'})}
      )
    ),

    phone_number: Yup.string()
      .required(
        intl.formatMessage(
          {id: 'VALIDATION.REQUIRE'},
          {name: intl.formatMessage({id: 'FORM.PHONE_NUMBER'})}
        )
      )
      .matches(
        /^([0-9 \u0600-\u06FF\s àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
        'Invalid Data!'
      ),

    rank_id: Yup.string().required(
      intl.formatMessage({id: 'VALIDATION.REQUIRE'}, {name: intl.formatMessage({id: 'FORM.RANK'})})
    ),
    unit_id: Yup.string().required(
      intl.formatMessage({id: 'VALIDATION.REQUIRE'}, {name: intl.formatMessage({id: 'FORM.UNIT'})})
    ),
    department_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.DEPARTMENT'})}
      )
    ),
    position_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.POSITION'})}
      )
    ),
    relative_type_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.RELATIVE_TYPE'})}
      )
    ),
    relative_name: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.RELATIVE_NAME'})}
      )
    ),
    relative_phone_number: Yup.string()
      .required(
        intl.formatMessage(
          {id: 'VALIDATION.REQUIRE'},
          {name: intl.formatMessage({id: 'FORM.RELATIVE_PHONE_NUMBER'})}
        )
      )
      .matches(
        /^([0-9 \u0600-\u06FF\s àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
        'Invalid Data!'
      ),

    educational_level_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.EDUCATIONAL_LEVEL'})}
      )
    ),
    country_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.EDUCATION_PLACE'})}
      )
    ),
    previous_card_number: Yup.string().required('Street Number / Name is required!'),
    tcn: Yup.string().nullable(),
    gender_id: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.GENDER'})}
      )
    ),
    date_of_innovation: Yup.string().required(
      intl.formatMessage(
        {id: 'VALIDATION.REQUIRE'},
        {name: intl.formatMessage({id: 'FORM.DATE_OF_INNOVATION'})}
      )
    ),
  })

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, {setSubmitting, resetForm}) => {
      setLoading(true)
      const formData = new FormData()

      formData.append('first_name', values.first_name)
      formData.append('last_name', values.last_name)
      formData.append('father_name', values.father_name)
      formData.append('grand_father_name', values.grand_father_name)
      formData.append('first_name_en', values.first_name_en)
      formData.append('last_name_en', values.last_name_en)
      formData.append('father_name_en', values.father_name_en)
      formData.append('grand_father_name_en', values.grand_father_name_en)
      formData.append('date_of_birth', values.date_of_birth)
      formData.append('place_of_birth', values.place_of_birth)
      formData.append('blood_group_id', values.blood_group_id)
      formData.append('eye_color_id', values.eye_color_id)
      formData.append('hair_color_id', values.hair_color_id)
      formData.append('height', values.height)
      formData.append('weight', values.weight)
      formData.append('marital_status_id', values.marital_status_id)
      formData.append('nic', values.nic)
      formData.append('nic_type', values.nic_type)
      formData.append('national_volume_no', values.national_volume_no)
      formData.append('national_page_no', values.national_page_no)
      formData.append('national_record_no', values.national_record_no)
      formData.append('nationality_id', values.nationality_id)
      formData.append('mother_language_id', values.mother_language_id)
      formData.append('distinctive_mark', values.distinctive_mark)
      formData.append('province_id', values.province_id)
      formData.append('district_id', values.district_id)
      formData.append('village', values.village)
      formData.append('current_province_id', values.current_province_id)
      formData.append('current_district_id', values.current_district_id)
      formData.append('current_village', values.current_village)
      formData.append('phone_number', values.phone_number)
      formData.append('rank_id', values.rank_id)
      formData.append('unit_id', values.unit_id)
      formData.append('department_id', values.department_id)
      formData.append('position_id', values.position_id)
      formData.append('relative_type_id', values.relative_type_id)
      formData.append('relative_name', values.relative_name)
      formData.append('relative_phone_number', values.relative_phone_number)
      formData.append('educational_level_id', values.educational_level_id)
      formData.append('country_id', values.country_id)
      formData.append('previous_card_number', values.previous_card_number)
      formData.append('tcn', values.tcn)
      formData.append('gender_id', values.gender_id)
      formData.append('date_of_innovation', values.date_of_innovation)

      try {
        axios
          .post('api/employee/store_employee', formData)
          .then((res) => {
            resetForm()
            toast.success('Wow so easy!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            })

            navigate('/employee/list')
          })
          .catch((error) => {
            setLoading(false)
            setSubmitting(false)
            toast.error('🦄 Wow so easy!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            })
          })
      } catch (error) {
        console.error(error)
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  const [dropdwonData, setDropdownData] = useState({
    genders: [],
    blood_groups: [],
    provinces: [],
    colors: [],
    nationalities: [],
    ranks: [],
    countries: [],
    languages: [],
    educational_levels: [],
    relatives: [],
  })

  useEffect(() => {
    ;(async () => {
      const {data} = await axios.get('/api/lookup/get-create-drop-down-data')
      setDropdownData({
        genders: data.genders,
        blood_groups: data.blood_groups,
        provinces: data.provinces,
        colors: data.colors,
        nationalities: data.nationalities,
        ranks: data.ranks,
        countries: data.countries,
        languages: data.languages,
        educational_levels: data.educational_levels,
        relatives: data.relatives,
      })
      setLoader(false)
    })()
  }, [])

  const [mainDistricts, setMainDistricts] = useState([])
  const [currentDistricts, setCurrentDistricts] = useState([])
  const [selectLoading, setSelectLoading] = useState(false)

  const handleChangeProvinceId = async (province_id: any, type: string) => {
    setSelectLoading(true)

    if (province_id !== '') {
      const {data} = await axios.get(`api/lookup/get-district-by-province-id/${province_id}`)
      if (type === 'main') {
        formik.setFieldValue('province_id', province_id)
        setMainDistricts(data)
      } else {
        formik.setFieldValue('current_province_id', province_id)
        setCurrentDistricts(data)
      }
      setSelectLoading(false)
    }
  }

  return (
    <div className='card mb-5 mb-xl-10 mt-0' id='kt_profile_details_view'>
      <div className='card-body p-9'>
        <h3 className='px-3'>{intl.formatMessage({id: 'EMPLOYEE.NEW_EMPLOYEE'})}</h3>
        {!loader && (
          <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            autoComplete='off'
            onSubmit={formik.handleSubmit}
          >
            {/* begin::Form row */}
            {/* First row */}
            <div className='d-flex flex-wrap flex-sm-nowrap'>
              <div className='row mb-8 col-lg-10 shadow-sm m-2 p-5'>
                <div className='col-lg-12 mb-0'>
                  <label className='col-form-label label fw-bold fs-4 text-primary'>
                    {intl.formatMessage({id: 'FORM.PERSONAL_INFORMATION'})}
                  </label>
                </div>
                <div className='row'>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: ''})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: ''})}
                      {...formik.getFieldProps('first_name')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid': formik.touched.first_name && formik.errors.first_name,
                        },
                        {
                          'is-valid': formik.touched.first_name && !formik.errors.first_name,
                        }
                      )}
                    />
                    {formik.touched.first_name && formik.errors.first_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.first_name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.LAST_NAME'}, {name: ''})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage({id: 'FORM.LAST_NAME'}, {name: ''})}
                      {...formik.getFieldProps('last_name')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid': formik.touched.last_name && formik.errors.last_name,
                        },
                        {
                          'is-valid': formik.touched.last_name && !formik.errors.last_name,
                        }
                      )}
                    />
                    {formik.touched.last_name && formik.errors.last_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.last_name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.FATHER_NAME'}, {name: ''})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage({id: 'FORM.FATHER_NAME'}, {name: ''})}
                      {...formik.getFieldProps('father_name')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid': formik.touched.father_name && formik.errors.father_name,
                        },
                        {
                          'is-valid': formik.touched.father_name && !formik.errors.father_name,
                        }
                      )}
                    />
                    {formik.touched.father_name && formik.errors.father_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.father_name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.GRAND_FATHER_NAME'}, {name: ''})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage({id: 'FORM.GRAND_FATHER_NAME'}, {name: ''})}
                      {...formik.getFieldProps('grand_father_name')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid':
                            formik.touched.grand_father_name && formik.errors.grand_father_name,
                        },
                        {
                          'is-valid':
                            formik.touched.grand_father_name && !formik.errors.grand_father_name,
                        }
                      )}
                    />
                    {formik.touched.grand_father_name && formik.errors.grand_father_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.grand_father_name}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: '(English)'})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage({id: 'FORM.FIRST_NAME'}, {name: '(English)'})}
                      {...formik.getFieldProps('first_name_en')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid': formik.touched.first_name_en && formik.errors.first_name_en,
                        },
                        {
                          'is-valid': formik.touched.first_name_en && !formik.errors.first_name_en,
                        }
                      )}
                    />
                    {formik.touched.first_name_en && formik.errors.first_name_en && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.first_name_en}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.LAST_NAME'}, {name: '(English)'})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage({id: 'FORM.LAST_NAME'}, {name: '(English)'})}
                      {...formik.getFieldProps('last_name_en')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid': formik.touched.last_name_en && formik.errors.last_name_en,
                        },
                        {
                          'is-valid': formik.touched.last_name_en && !formik.errors.last_name_en,
                        }
                      )}
                    />
                    {formik.touched.last_name_en && formik.errors.last_name_en && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.last_name_en}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.FATHER_NAME'}, {name: '(English)'})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage(
                        {id: 'FORM.FATHER_NAME'},
                        {name: '(English)'}
                      )}
                      {...formik.getFieldProps('father_name_en')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid':
                            formik.touched.father_name_en && formik.errors.father_name_en,
                        },
                        {
                          'is-valid':
                            formik.touched.father_name_en && !formik.errors.father_name_en,
                        }
                      )}
                    />
                    {formik.touched.father_name_en && formik.errors.father_name_en && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.father_name_en}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-3 col-md-3 col-sm-12'>
                    <label className='col-form-label label fw-bolder'>
                      {intl.formatMessage({id: 'FORM.GRAND_FATHER_NAME'}, {name: '(English)'})}
                      &nbsp;
                      <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                    </label>
                    <input
                      type='text'
                      placeholder={intl.formatMessage(
                        {id: 'FORM.GRAND_FATHER_NAME'},
                        {name: '(English)'}
                      )}
                      {...formik.getFieldProps('grand_father_name_en')}
                      className={clsx(
                        'form-control form-control-sm',
                        {
                          'is-invalid':
                            formik.touched.grand_father_name_en &&
                            formik.errors.grand_father_name_en,
                        },
                        {
                          'is-valid':
                            formik.touched.grand_father_name_en &&
                            !formik.errors.grand_father_name_en,
                        }
                      )}
                    />
                    {formik.touched.grand_father_name_en && formik.errors.grand_father_name_en && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block fw-bold'>
                          <span role='alert' className='text-danger'>
                            {formik.errors.grand_father_name_en}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Second row */}
            <div className='row mb-8 shadow-sm m-2 p-5'>
              <div className='col-lg-12 mb-0'>
                <label className='col-form-label label fw-bold fs-4 text-primary'>
                  {intl.formatMessage({id: 'FORM.PERSONAL_INFORMATION'})}
                </label>
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.DATE_OF_BIRTH'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <DatePicker
                  calendar={persian}
                  format='YYYY-MM-DD'
                  locale={persian_fa}
                  containerStyle={{width: '100%'}}
                  value={formik.values.date_of_birth}
                  placeholder={intl.formatMessage({id: 'FORM.DATE_OF_BIRTH'})}
                  style={{
                    width: '100%',
                    height: '36px',
                    boxSizing: 'border-box',
                  }}
                  onChange={(e: any) => {
                    formik.setFieldValue(
                      'date_of_birth',
                      e.year + '-' + e.month.number + '-' + e.day
                    )
                    console.log(e)
                  }}
                  editable={false}
                />
                {formik.touched.date_of_birth && formik.errors.date_of_birth && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bolder'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.date_of_birth}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.PLACE_OF_BIRTH'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='place_of_birth'
                  className='input'
                  onChange={(event: any) => {
                    handleChangeProvinceId(event.id, 'main')
                  }}
                  value={formik.values.place_of_birth}
                  options={dropdwonData.provinces}
                />
                {formik.touched.place_of_birth && formik.errors.place_of_birth && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.place_of_birth}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.GENDER'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='gender_id'
                  className='input'
                  onChange={(gender: any) => formik.setFieldValue('gender_id', gender.id)}
                  value={formik.values.gender_id}
                  options={dropdwonData.genders}
                />
                {formik.touched.gender_id && formik.errors.gender_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.gender_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.BLOOD_GROUP'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='blood_group_id'
                  className='input'
                  onChange={(blood_group: any) =>
                    formik.setFieldValue('blood_group_id', blood_group.id)
                  }
                  value={formik.values.blood_group_id}
                  options={dropdwonData.blood_groups}
                />
                {formik.touched.blood_group_id && formik.errors.blood_group_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.blood_group_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.EYE_COLOR'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='eye_color_id'
                  className='input'
                  onChange={(color: any) => formik.setFieldValue('eye_color_id', color.id)}
                  value={formik.values.eye_color_id}
                  options={dropdwonData.colors}
                />
                {formik.touched.eye_color_id && formik.errors.eye_color_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.eye_color_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.HAIR_COLOR'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='hair_color_id'
                  className='input'
                  onChange={(color: any) => formik.setFieldValue('hair_color_id', color.id)}
                  value={formik.values.hair_color_id}
                  options={dropdwonData.colors}
                />
                {formik.touched.hair_color_id && formik.errors.hair_color_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.hair_color_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.HEIGHT'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.HEIGHT'})}
                  {...formik.getFieldProps('height')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.height && formik.errors.height,
                    },
                    {
                      'is-valid': formik.touched.height && !formik.errors.height,
                    }
                  )}
                />
                {formik.touched.height && formik.errors.height && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.height}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.WEIGHT'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.WEIGHT'})}
                  {...formik.getFieldProps('weight')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.weight && formik.errors.weight,
                    },
                    {
                      'is-valid': formik.touched.weight && !formik.errors.weight,
                    }
                  )}
                />
                {formik.touched.weight && formik.errors.weight && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.weight}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.MARITAL_STATUS'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='marital_status_id'
                  numeric
                  className='input'
                  onChange={(status: any) => formik.setFieldValue('marital_status_id', status.name)}
                  value={formik.values.marital_status_id}
                  options={marital_statuses}
                />
                {formik.touched.marital_status_id && formik.errors.marital_status_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.marital_status_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.NATIONALITY'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='nationality_id'
                  className='input'
                  onChange={(degree: any) => formik.setFieldValue('nationality_id', degree.id)}
                  value={formik.values.nationality_id}
                  options={dropdwonData.nationalities}
                />
                {formik.touched.nationality_id && formik.errors.nationality_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.nationality_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.MOTHER_LANGUAGE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='mother_language_id'
                  className='input'
                  onChange={(year: any) => formik.setFieldValue('mother_language_id', year.id)}
                  value={formik.values.mother_language_id}
                  options={dropdwonData.languages}
                />
                {formik.touched.mother_language_id && formik.errors.mother_language_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.mother_language_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.PHONE_NUMBER'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.PHONE_NUMBER'})}
                  {...formik.getFieldProps('phone_number')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.phone_number && formik.errors.phone_number,
                    },
                    {
                      'is-valid': formik.touched.phone_number && !formik.errors.phone_number,
                    }
                  )}
                />
                {formik.touched.phone_number && formik.errors.phone_number && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.phone_number}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.PREVIOUS_CARD_NUMBER'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.PREVIOUS_CARD_NUMBER'})}
                  {...formik.getFieldProps('previous_card_number')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid':
                        formik.touched.previous_card_number && formik.errors.previous_card_number,
                    },
                    {
                      'is-valid':
                        formik.touched.previous_card_number && !formik.errors.previous_card_number,
                    }
                  )}
                />
                {formik.touched.previous_card_number && formik.errors.previous_card_number && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.previous_card_number}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.EDUCATIONAL_LEVEL'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='educational_level_id'
                  className='input'
                  onChange={(educational_level: any) =>
                    formik.setFieldValue('educational_level_id', educational_level.id)
                  }
                  value={formik.values.educational_level_id}
                  options={dropdwonData.educational_levels}
                />
                {formik.touched.educational_level_id && formik.errors.educational_level_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.educational_level_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.EDUCATION_PLACE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='country_id'
                  className='input'
                  onChange={(country: any) => formik.setFieldValue('country_id', country.id)}
                  value={formik.values.country_id}
                  options={dropdwonData.countries}
                />
                {formik.touched.country_id && formik.errors.country_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.country_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Third row */}
            <div className='row mb-8 shadow-sm m-2 p-5'>
              <div className='col-lg-12 mb-0'>
                <label className='col-form-label label fw-bold fs-4 text-primary'>
                  {intl.formatMessage({id: 'FORM.NIC_INFROMATION'})}
                </label>
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.NIC_TYPE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='nic_type'
                  className='input'
                  onChange={(nic_type: any) => formik.setFieldValue('nic_type', nic_type.name)}
                  value={formik.values.nic_type}
                  options={national_id_types}
                />
                {formik.touched.nic_type && formik.errors.nic_type && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.nic_type}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.NIC'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.NIC'})}
                  {...formik.getFieldProps('nic')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.nic && formik.errors.nic,
                    },
                    {
                      'is-valid': formik.touched.nic && !formik.errors.nic,
                    }
                  )}
                />
                {formik.touched.nic && formik.errors.nic && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.nic}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-2'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.NATIONAL_VOLUME_NO'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.NATIONAL_VOLUME_NO'})}
                  {...formik.getFieldProps('national_volume_no')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid':
                        formik.touched.national_volume_no && formik.errors.national_volume_no,
                    },
                    {
                      'is-valid':
                        formik.touched.national_volume_no && !formik.errors.national_volume_no,
                    }
                  )}
                />
                {formik.touched.national_volume_no && formik.errors.national_volume_no && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.national_volume_no}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-2'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.NATIONAL_PAGE_NO'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.NATIONAL_PAGE_NO'})}
                  {...formik.getFieldProps('national_page_no')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid':
                        formik.touched.national_page_no && formik.errors.national_page_no,
                    },
                    {
                      'is-valid':
                        formik.touched.national_page_no && !formik.errors.national_page_no,
                    }
                  )}
                />
                {formik.touched.national_page_no && formik.errors.national_page_no && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.national_page_no}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-2'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.NATIONAL_RECORD_NO'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.NATIONAL_RECORD_NO'})}
                  {...formik.getFieldProps('national_record_no')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid':
                        formik.touched.national_record_no && formik.errors.national_record_no,
                    },
                    {
                      'is-valid':
                        formik.touched.national_record_no && !formik.errors.national_record_no,
                    }
                  )}
                />
                {formik.touched.national_record_no && formik.errors.national_record_no && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.national_record_no}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fourth row */}
            <div className='row mb-8 shadow-sm m-2 p-5'>
              <div className='col-lg-12 mb-0'>
                <label className='col-form-label label fw-bold fs-4 text-primary'>
                  {intl.formatMessage({id: 'FORM.MAIN_RESIDENCE'})}
                </label>
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.PROVINCE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='province_id'
                  className='input'
                  onChange={(event: any) => {
                    handleChangeProvinceId(event.id, 'main')
                  }}
                  value={formik.values.province_id}
                  options={dropdwonData.provinces}
                />
                {formik.touched.province_id && formik.errors.province_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.province_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.DISTRICT'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='district_id'
                  className='input'
                  onChange={(district: any) => formik.setFieldValue('district_id', district.id)}
                  value={formik.values.district_id}
                  options={mainDistricts}
                  isLoading={true}
                  isLoadTrueFalse={selectLoading}
                />
                {formik.touched.district_id && formik.errors.district_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.district_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.VILLAGE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.VILLAGE'})}
                  {...formik.getFieldProps('village')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.village && formik.errors.village,
                    },
                    {
                      'is-valid': formik.touched.village && !formik.errors.village,
                    }
                  )}
                />
                {formik.touched.village && formik.errors.village && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.village}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-12 mb-0'>
                <label className='col-form-label label fw-bold fs-4 text-primary'>
                  {intl.formatMessage({id: 'FORM.CURRENT_RESIDENCE'})}
                </label>
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.PROVINCE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='current_province_id'
                  className='input'
                  onChange={(event: any) => {
                    handleChangeProvinceId(event.id, 'current')
                  }}
                  value={formik.values.current_province_id}
                  options={dropdwonData.provinces}
                />
                {formik.touched.current_province_id && formik.errors.current_province_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.current_province_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.DISTRICT'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='current_district_id'
                  className='input'
                  onChange={(country: any) =>
                    formik.setFieldValue('current_district_id', country.id)
                  }
                  value={formik.values.current_district_id}
                  options={currentDistricts}
                  isLoading={true}
                  isLoadTrueFalse={selectLoading}
                />
                {formik.touched.current_district_id && formik.errors.current_district_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.current_district_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.VILLAGE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.VILLAGE'})}
                  {...formik.getFieldProps('current_village')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.current_village && formik.errors.current_village,
                    },
                    {
                      'is-valid': formik.touched.current_village && !formik.errors.current_village,
                    }
                  )}
                />
                {formik.touched.current_village && formik.errors.current_village && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.current_village}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fifth row */}
            <div className='row mb-8 shadow-sm m-2 p-5'>
              <div className='col-lg-12 mb-0'>
                <label className='col-form-label label fw-bold fs-4 text-primary'>
                  {intl.formatMessage({id: 'FORM.JOB_SPECIFICATION'})}
                </label>
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.RANK'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='rank_id'
                  className='input'
                  onChange={(rank: any) => formik.setFieldValue('rank_id', rank.id)}
                  value={formik.values.rank_id}
                  options={dropdwonData.ranks}
                />
                {formik.touched.rank_id && formik.errors.rank_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.rank_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.UNIT'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='unit_id'
                  className='input'
                  onChange={(country: any) => formik.setFieldValue('unit_id', country.id)}
                  value={formik.values.unit_id}
                  options={dropdwonData.countries}
                />
                {formik.touched.unit_id && formik.errors.unit_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.unit_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.DEPARTMENT'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='department_id'
                  className='input'
                  onChange={(country: any) => formik.setFieldValue('department_id', country.id)}
                  value={formik.values.department_id}
                  options={dropdwonData.countries}
                />
                {formik.touched.department_id && formik.errors.department_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.department_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-3'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.POSITION'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='position_id'
                  className='input'
                  onChange={(country: any) => formik.setFieldValue('position_id', country.id)}
                  value={formik.values.position_id}
                  options={dropdwonData.countries}
                />
                {formik.touched.position_id && formik.errors.position_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.position_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.DATE_OF_INNOVATION'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <DatePicker
                  calendar={persian}
                  format='YYYY-MM-DD'
                  locale={persian_fa}
                  containerStyle={{width: '100%'}}
                  value={formik.values.date_of_innovation}
                  placeholder={intl.formatMessage({id: 'FORM.DATE_OF_INNOVATION'})}
                  style={{
                    width: '100%',
                    height: '36px',
                    boxSizing: 'border-box',
                  }}
                  onChange={(e: any) => {
                    formik.setFieldValue(
                      'date_of_innovation',
                      e.year + '-' + e.month.number + '-' + e.day
                    )
                  }}
                  editable={false}
                />
                {formik.touched.date_of_innovation && formik.errors.date_of_innovation && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bolder'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.date_of_innovation}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.DISTINCTIVE_MARK'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.DISTINCTIVE_MARK'})}
                  {...formik.getFieldProps('distinctive_mark')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid':
                        formik.touched.distinctive_mark && formik.errors.distinctive_mark,
                    },
                    {
                      'is-valid':
                        formik.touched.distinctive_mark && !formik.errors.distinctive_mark,
                    }
                  )}
                />
                {formik.touched.distinctive_mark && formik.errors.distinctive_mark && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.distinctive_mark}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.TCN'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.TCN'})}
                  {...formik.getFieldProps('tcn')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.tcn && formik.errors.tcn,
                    },
                    {
                      'is-valid': formik.touched.tcn && !formik.errors.tcn,
                    }
                  )}
                />
                {formik.touched.tcn && formik.errors.tcn && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.tcn}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sexth row */}
            <div className='row mb-8 shadow-sm m-2 p-5'>
              <div className='col-lg-12 mb-0'>
                <label className='col-form-label label fw-bold fs-4 text-primary'>
                  {intl.formatMessage({id: 'FORM.RELATIVE_INFORMATION'})}
                </label>
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.RELATIVE_TYPE'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <CustomeSelect
                  name='relative_type_id'
                  className='input'
                  onChange={(relative: any) =>
                    formik.setFieldValue('relative_type_id', relative.id)
                  }
                  value={formik.values.relative_type_id}
                  options={dropdwonData.relatives}
                />
                {formik.touched.relative_type_id && formik.errors.relative_type_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.relative_type_id}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.RELATIVE_NAME'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.RELATIVE_NAME'})}
                  {...formik.getFieldProps('relative_name')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid': formik.touched.relative_name && formik.errors.relative_name,
                    },
                    {
                      'is-valid': formik.touched.relative_name && !formik.errors.relative_name,
                    }
                  )}
                />
                {formik.touched.relative_name && formik.errors.relative_name && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.relative_name}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='col-lg-4'>
                <label className='col-form-label label fw-bolder'>
                  {intl.formatMessage({id: 'FORM.RELATIVE_PHONE_NUMBER'})}
                  &nbsp;
                  <i className='fa-solid fa-star-of-life text-danger align-text-top fs-10'></i>
                </label>
                <input
                  type='text'
                  placeholder={intl.formatMessage({id: 'FORM.RELATIVE_PHONE_NUMBER'})}
                  {...formik.getFieldProps('relative_phone_number')}
                  className={clsx(
                    'form-control form-control-sm',
                    {
                      'is-invalid':
                        formik.touched.relative_phone_number && formik.errors.relative_phone_number,
                    },
                    {
                      'is-valid':
                        formik.touched.relative_phone_number &&
                        !formik.errors.relative_phone_number,
                    }
                  )}
                />
                {formik.touched.relative_phone_number && formik.errors.relative_phone_number && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.relative_phone_number}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Seventh Row */}
            <div className='row mb-8 shadow-sm m-2 p-5 mt-0'>
              <div className='d-flex' style={{flexDirection: 'row-reverse'}}>
                <div className='fs-6 fw-bold text-gray-700'>
                  <button
                    type='submit'
                    className='btn btn-sm btn-light btn-active-primary fw-bolder'
                    disabled={formik.isSubmitting || !formik.isValid || loading}
                  >
                    {!loading && (
                      <span className='indicator-label'>
                        <i className='fas fa-save me-1'></i>
                        {intl.formatMessage({id: 'GLOBAL.SAVE'})}
                      </span>
                    )}
                    {loading && (
                      <span className='indicator-progress' style={{display: 'block'}}>
                        {intl.formatMessage({id: 'GLOBAL.LOADING'})}
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                  &nbsp;&nbsp;
                  <Link
                    className='btn btn-sm btn-flex btn-light btn-active-dark fw-bolder'
                    to='/lecturer/list'
                  >
                    <b>
                      <i className='fa-solid fa-circle-left me-1'></i>
                      {intl.formatMessage({id: 'GLOBAL.BACK'})}
                    </b>
                  </Link>
                  <div />
                </div>
              </div>
            </div>
            {/* begin::Form row */}
          </form>
        )}
        {loader && <Loader />}
      </div>
    </div>
  )
}
export default CreateEmployee
