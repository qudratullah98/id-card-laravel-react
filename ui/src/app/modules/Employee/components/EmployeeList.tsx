import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {useIntl} from 'react-intl'
import EmployeeDataTable from './EmployeeDataTable'

const EmployeeList = (props: any) => {
  const intl = useIntl()

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{intl.formatMessage({id: 'EMPLOYEE.LIST'})}</h3>
          </div>

          <div className='d-flex align-items-center py-1'>
            <div className='me-4'>
              <button
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                data-bs-toggle='collapse'
                data-bs-target='#movementSearch'
                aria-expanded='true'
                aria-controls='movementSearch'
              >
                <span className='svg-icon svg-icon-5 svg-icon-gray-500 me-1'>
                  <i className='fa-solid fa-arrow-down-short-wide'></i>
                </span>
                {intl.formatMessage({id: 'GLOBAL.SEARCH'})}
              </button>
            </div>
            {props.user.userCan('create-card') ? (
              <Link
                className='btn btn-primary btn-sm align-self-center fw-bold'
                to={'/employee/create'}
              >
                <i className='fas fa-plus'></i>
                {intl.formatMessage({id: 'EMPLOYEE.NEW_EMPLOYEE'})}
              </Link>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='card-body p-9'>
          <EmployeeDataTable
            fetchUrl='api/employee/list'
            headers={[
              {
                headerName: 'شماره',
                sort: 'id',
              },
              {
                headerName: 'نام',
                sort: 'first_name',
              },
              {
                headerName: 'تخلص',
                sort: 'last_name',
              },
              {
                headerName: 'نام پدر',
                sort: 'father_name',
              },
              {
                headerName: 'تاریخ تولد',
                sort: 'data_of_birth',
              },
              {
                headerName: 'عملیات',
                sort: 'id',
              },
            ]}
            columns={6}
          />
        </div>
      </div>
    </>
  )
}
//@ts-ignore
export default connect((state) => ({user: state.user}))(EmployeeList)
