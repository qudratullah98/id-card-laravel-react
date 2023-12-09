import React from 'react'
import {FormikErrors, Formik, Form, Field, ErrorMessage} from 'formik'
import clsx from 'clsx'
import CustomeSelect from '../../../custom/CustomeSelect'
import * as Yup from 'yup'
const initialvalues: {name: string; email: string; chanal: string; gender: string,place_of_birth:string} = {
  name: '',
  email: '',
  chanal: '',
  gender: '',
  place_of_birth: '',
}
const YoutubeForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email('invalid email address').required(),
    chanal: Yup.string().required(),
    gender: Yup.string().required(),
    place_of_birth: Yup.string().required(),
  })

  const submit = (value: any) => {
    console.log(value)
  }

  const options=[
    {"id":"1","value":"vlaue"},
    {"id":"1","value":"vlaue"},
    {"id":"1","value":"vlaue"},
    {"id":"1","value":"vlaue"},
    {"id":"2","value":"vlaue"}
]
const handlechange=(e:any)=>{
  console.log(e)
}
  return (
    <>
      <div className='container border'>
        <div className='row'>
          <div className='col-md-8'>
            <Formik
              initialValues={initialvalues}
              onSubmit={submit}
              validationSchema={validationSchema}
            >
              {(formik) => (
                <>
                  <Form>
                    <div className='row'>
                      <div className='col-md-9'>
                        <div className='form-gorup m-3 p-2'>
                          <label htmlFor='name'>Name</label>
                          <input
                            id='name'
                            {...formik.getFieldProps('name')}
                            className={clsx(
                              'form-control',
                              {
                                'is-invalid': formik.errors.name && formik.touched.name,
                              },
                              {
                                'is-valid': !formik.errors.name && formik.touched.name,
                              }
                            )}
                          />

                          <span className='text-danger'> {formik.errors.name}</span>
                        </div>
                        <div className='form-gorup m-3 p-2'>
                          <label htmlFor='name'>Email</label>
                          <input
                            id='name'
                            {...formik.getFieldProps('email')}
                            className={clsx(
                              'form-control',
                              {
                                'is-invalid': formik.errors.email && formik.touched.email,
                              },
                              {
                                'is-valid': !formik.errors.email && formik.touched.email,
                              }
                            )}
                          />
                          <span className='text-danger'>{formik.errors.email}</span>
                        </div>
                        <div className='form-gorup m-3 p-2'>
                          <label htmlFor='name'>Chanal</label>
                          <input
                            id='name'
                            {...formik.getFieldProps('chanal')}
                            className={clsx(
                              'form-control',
                              {
                                'is-invalid': formik.errors.chanal && formik.touched.chanal,
                              },
                              {
                                'is-valid': !formik.errors.chanal && formik.touched.chanal,
                              }
                            )}
                          />
                          <span className='text-danger'>{formik.errors.chanal}</span>
                        </div>
                        <div className='form-group mt-3 p-2'>
                          <label htmlFor='gender'>Gender</label>
                          <Field
                            component='select'
                            className={clsx(
                              'form-control',
                              {
                                'is-invalid': formik.errors.gender && formik.touched.gender,
                              },
                              {
                                'is-valid': !formik.errors.gender && formik.touched.gender,
                              }
                            )}
                            name='gender'
                          >
                            <option value='' disabled>
                              {' '}
                              Select Your Gender{' '}
                            </option>
                            <option value={1}>Mail</option>
                            <option value={2}>FeMail</option>
                          </Field>

                          <span className='text-danger'>
                            {' '}
                            <ErrorMessage name='gender' />
                          </span>
                        </div>
                        <div className='form-group mt-3 p-2 '>
                          <label htmlFor='constom'>Select</label>
                          <CustomeSelect
                            name='place_of_birth'
                            className='input'
                             onChange={handlechange}
                            value={formik.values.place_of_birth}
                            options={options}
                            multi
                          />
                           <ErrorMessage name='place_of_birth' />
                        </div>
                        <div className='form-group mt-4 '>
                          <button className='btn btn-primary'>submit</button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
export default YoutubeForm
