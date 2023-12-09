/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, login} from '../core/_requests'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useAuth} from '../core/Auth'
import {useIntl} from 'react-intl'

const initialValues = {
  email: 'admin@moi.gov.af',
  password: '12345678',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const intl = useIntl()

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required(
        intl.formatMessage(
          {id: 'VALIDATION.REQUIRE'},
          {name: intl.formatMessage({id: 'GLOBAL.EMAIL'})}
        )
      ),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required(
        intl.formatMessage(
          {id: 'VALIDATION.REQUIRE'},
          {name: intl.formatMessage({id: 'GLOBAL.PASSWORD'})}
        )
      ),
  })

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error: any) {
        // console.error(error)

        // Handle error and retrieve response
        if (error.response) {
          setStatus(error.response.data.message)
          console.log('data', error.response.data.message) // Response data
          console.log('status', error.response.status) // Response status code
          console.log('header', error.response.headers) // Response headers
        } else if (error.request) {
          console.log('request', error.request) // No response received
        } else {
          console.log('Error', error.message) // General error
        }
        saveAuth(undefined)
        // setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <img alt='Logo' src={toAbsoluteUrl('/media/moi/moi.png')} className='h-175px me-3' />
        <h1 className='text-dark fw-bolder mt-5'>
          {intl.formatMessage({id: 'GLOBAL.SYSTEM_NAME'})}
        </h1>
        {/* <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div> */}
      </div>
      {/* begin::Heading */}

      {/* begin::Separator */}
      <div className='separator separator-content my-10'>
        <span className='w-125px text-gray-500 fw-semibold'>
          {intl.formatMessage({id: 'GLOBAL.LOGIN'})}
        </span>
      </div>
      {/* end::Separator */}

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-label fs-6 fw-bolder text-dark'>{intl.formatMessage({id: 'GLOBAL.EMAIL'})}</label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
          style={{direction: 'rtl'}}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container fw-bold'>
            <span role='alert' className='text-danger'>
              {formik.errors.email}
            </span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>{intl.formatMessage({id: 'GLOBAL.PASSWORD'})}</label>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block fw-bold'>
              <span role='alert' className='text-danger'>
                {formik.errors.password}
              </span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <div />

        {/* begin::Link */}
        <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>{intl.formatMessage({id: 'GLOBAL.LOGIN'})}</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              {intl.formatMessage({id: 'GLOBAL.LOADING'})}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}

      <div className='text-gray-500 text-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div>
    </form>
  )
}
