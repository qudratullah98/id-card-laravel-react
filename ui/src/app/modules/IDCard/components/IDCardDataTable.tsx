import axios from 'axios'
import {debounce} from 'lodash'
import {useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import Paginator from '../../../custom/Paginator'
import UnAuthorized from '../../../custom/UnAuthorized'
import {Decrypt, Encrypt} from '../../auth/core/_requests'
import Loader from '../../../pages/loader/Loader'

const SORT_ASC = 'asc'
const SORT_DESC = 'desc'

const IDCardDataTable = (props: any) => {
  const intl = useIntl()
  const [data, setData] = useState([])
  const [perPage, setPerPage] = useState(10)
  const [sortColumn, setSortColumn] = useState(props.columns[0])
  const [sortOrder, setSortOrder] = useState('asc')
  const [search, setSearch] = useState('')
  const [isAutorized, setIsAuthorized] = useState(true)
  const [pagination, setPagination] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  const handleSort = (column: any) => {
    if (column === sortColumn) {
      sortOrder === SORT_ASC ? setSortOrder(SORT_DESC) : setSortOrder(SORT_ASC)
    } else {
      setSortColumn(column)
      setSortOrder(SORT_ASC)
    }
  }

  const handleSearch = useRef(
    debounce((query) => {
      setSearch(query)
      setCurrentPage(1)
      setSortOrder(SORT_ASC)
      setSortColumn(props.columns[0])
    }, 500)
  ).current
  const handlePerPage = (perPage: any) => {
    setCurrentPage(1)
    setPerPage(perPage)
  }
  const loaderStyle = {width: '4rem', height: '4rem'}

  const fetchData = async () => {
    setLoading(true)
    const params = {
      search,
      sort_field: sortColumn,
      sort_order: sortOrder,
      per_page: perPage,
      page: currentPage,
    }
    try {
      const {data} = await axios(props.fetchUrl, {params})
      // console.log('data', data)
      setData(data.data)
      setPagination(data.meta)
    } catch (error) {
      console.log(error)
      setIsAuthorized(false)
    }
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }

  useEffect(() => {
    fetchData()
  }, [props.fetchUrl, perPage, sortColumn, sortOrder, search, currentPage])
  return (
    <>
      <div>
        {isAutorized && (
          <>
            {/* Search per page starts */}
            <div className='form collapse' id='movementSearch'>
              <div className='row mb-3'>
                <div className='row mb-8'>
                  <div className='col-lg-6'>
                    <input
                      type='search'
                      placeholder='Search By Year...'
                      className={'form-control'}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </div>
                  <div className='col-md-6'>
                    <div className='input-group'>
                      <label className='mt-2 me-2'>Record Per Page</label>
                      <select
                        className='form-select'
                        value={perPage}
                        onChange={(e) => handlePerPage(e.target.value)}
                      >
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='50'>50</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Search per page ends  */}
            <div className='tableFixHead'>
              <table className='table table-hover table table-striped gy-4 gs-5 table-layout-fixed'>
                <thead className='table-dark'>
                  <tr>
                    {props.headers.map((header: any) => {
                      return (
                        <th
                          className='fw-bold'
                          key={header.headerName}
                          onClick={(e) => handleSort(header.sort)}
                        >
                          {header.headerName.replace('_', ' ')}
                          {header.sort === sortColumn ? (
                            <span>
                              {sortOrder === SORT_ASC ? (
                                <i className='ms-1 fa fa-arrow-up' aria-hidden='true'></i>
                              ) : (
                                <i className='ms-1 fa fa-arrow-down' aria-hidden='true'></i>
                              )}
                            </span>
                          ) : null}
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 && !loading ? (
                    <tr>
                      <td colSpan={props.columns}>
                        <p className='fs-4 text-danger text-center message-color'>
                          {intl.formatMessage({id: 'GLOBAL.NO_RECORD_FOUND'})}
                        </p>
                      </td>
                    </tr>
                  ) : (
                    ''
                  )}
                  {!loading ? (
                    data.map((d: any, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{d.first_name}</td>
                          <td>{d.last_name}</td>
                          <td>{d.father_name}</td>
                          <td>{d.date_of_birth}</td>
                          <td>
                            <DropdownButton id='dropdown-item-button' size='sm' title='Action'>
                              {props.user.userCan('create-card') ? (
                                <>
                                  {props.type !== 'archive' && (
                                    <Dropdown.Item as='button'>
                                      <Link
                                        className='btn btn-sm btn-flex fw-bolder'
                                        to={`/lecturer/${d.id}/edit`}
                                      >
                                        <i className='fas fa-edit text-primary'></i>Edit
                                      </Link>
                                    </Dropdown.Item>
                                  )}

                                  <Dropdown.Item as='button'>
                                    <Link
                                      className='btn btn-sm btn-flex fw-bolder'
                                      // to={`/${d.id}/view`}
                                      to={`/lecturer-view/view/${Encrypt(1)}/${Encrypt(d.id)}`}
                                    >
                                      <i className='fas fa-eye text-primary'></i>View
                                    </Link>
                                  </Dropdown.Item>

                                  {props.type === 'archive' && (
                                    <Dropdown.Item as='button'>
                                      <span
                                        className='btn btn-sm btn-flex fw-bolder'
                                        id='kt_toolbar_primary_button'
                                      >
                                        <b>
                                          <i className='fa-solid fa-check-to-slot text-success'></i>
                                          Active
                                        </b>
                                      </span>
                                    </Dropdown.Item>
                                  )}

                                  {props.type === 'active' && (
                                    <Dropdown.Item as='button'>
                                      <span
                                        className='btn btn-sm btn-flex fw-bolder'
                                        id='kt_toolbar_primary_button'
                                      >
                                        <b>
                                          <i className={'fas fa-archive text-info'}></i>
                                          Archive
                                        </b>
                                      </span>
                                    </Dropdown.Item>
                                  )}
                                </>
                              ) : (
                                ''
                              )}
                            </DropdownButton>
                          </td>
                        </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td colSpan={props.columns}>
                        <Loader />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {data.length > 0 && !loading ? (
              <div className='mt-2' style={{direction: 'ltr'}}>
                <Paginator
                  pagination={pagination}
                  pageChanged={(page: number) => setCurrentPage(page)}
                  totalItems={data.length}
                />
              </div>
            ) : null}
          </>
        )}
        {!isAutorized && <UnAuthorized />}
      </div>
    </>
  )
}
//@ts-ignore
export default connect((state) => ({user: state.user}))(IDCardDataTable)
