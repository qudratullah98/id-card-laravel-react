import axios from 'axios'
import {useEffect, useRef, useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {initialValues} from '../_module'
import {useIntl} from 'react-intl'
import {Link, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import CustomeSelect from '../../../custom/CustomeSelect'
import Loader from '../../../pages/loader/Loader'
import Select from 'react-select'
import {debounce} from 'lodash'

const CreateIDCard = () => {
  const intl = useIntl()

  const [loader, setLoader] = useState(true)
  const [loading, setLoading] = useState(false)
  const [selectLoading, setSelectLoading] = useState(false)
  const [generalDepartment, setGeneralDepartment] = useState()
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    rank_id: Yup.string().required(
      intl.formatMessage({id: 'VALIDATION.REQUIRE'}, {name: intl.formatMessage({id: 'FORM.RANK'})})
    ),
    general_department_id: Yup.string().required(
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
  })

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, {setSubmitting, resetForm}) => {
      setLoading(true)
      const formData = new FormData()
      formData.append('rank_id', values.rank_id)
      formData.append('general_department_id', values.general_department_id)
      formData.append('department_id', values.department_id)
      formData.append('position_id', values.position_id)
      formData.append('educational_level_id', values.educational_level_id)
      formData.append('country_id', values.country_id)

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

            navigate('/card/list')
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

  // useEffect(() => {
  //   ;(async () => {
  //     const {data} = await axios.get('http://localhost/apps2/api/test')
  //     setGeneralDepartment(data)
  //   })()
  // }, [])

  const handleSearch = useRef(
    debounce((query) => {
      console.log('data', query)
      // setSearch(query)
      handleChangeUnit(query)
    }, 500)
  ).current

  const handleChangeUnit = (inputValue: any) => {
    setSelectLoading(true)
    ;(async () => {
      const {data} = await axios.get(`http://localhost/apps2/api/test2/${inputValue}`)
      setGeneralDepartment(data)
    })()
    setSelectLoading(false)
  }

  const [inputValue, setInputValue] = useState('')
  const [selectedValue, setSelectedValue] = useState(null)
  const [options, setOptions] = useState([])

  useEffect(() => {
    const loadOptions = async () => {
      setSelectLoading(true)
      try {
        const {data} = await axios.get(`http://localhost/apps2/api/test2/${inputValue}`)
        setOptions(data)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
      setSelectLoading(false)
    }

    loadOptions()
  }, [inputValue])

  const handleInputChange = (newValue: any) => {
    setInputValue(newValue)
  }

  const [departments, setDepartments] = useState()

  const handleSelectChange = (selectedOption: any) => {
    setSelectedValue(selectedOption)
    // formik.setFieldValue('general_department_id', selectedOption.id)

    setSelectLoading(true)
    ;(async () => {
      const {data} = await axios.get(
        `http://localhost/apps2/api/get-department-by-general-department-id/${selectedOption?.id}`
      )
      setDepartments(data)
    })()
    setSelectLoading(false)
  }

  const [positions, setPositions] = useState()

  const handleChangeDepartment = (department: any) => {
    setSelectLoading(true)
    formik.setFieldValue('department_id', department.id)
    ;(async () => {
      const {data} = await axios.get(`http://localhost/apps2/api/get-position-by-department-id/${department.id}`)
      setPositions(data)
    })()
    setSelectLoading(false)
  }

  return (
    <div className='card mb-5 mb-xl-10 mt-0' id='kt_profile_details_view'>
      <div className='card-body p-9'>
        {!loader && (
          <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            autoComplete='off'
            onSubmit={formik.handleSubmit}
          >
            {/* begin::Form row */}

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
                <Select
                  name='general_department_id'
                  className='input'
                  getOptionLabel={(options: any) => options.name}
                  getOptionValue={(options: any) => options.id}
                  isClearable
                  isSearchable
                  isLoading={selectLoading}
                  options={options}
                  value={selectedValue}
                  onInputChange={handleInputChange}
                  onChange={handleSelectChange}
                />
                {formik.touched.general_department_id && formik.errors.general_department_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block fw-bold'>
                      <span role='alert' className='text-danger'>
                        {formik.errors.general_department_id}
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
                  onChange={handleChangeDepartment}
                  value={formik.values.department_id}
                  options={departments}
                  isLoading={selectLoading}
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
                  onChange={(position: any) => formik.setFieldValue('position_id', position.id)}
                  value={formik.values.position_id}
                  options={positions}
                  isLoading={selectLoading}
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
export default CreateIDCard
