import {useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {NavLink} from 'react-router-dom'
const OFFSET = 4

const Paginator = ({pagination, pageChanged, totalItems}: any) => {
  const intl = useIntl()
  const [pageNumbers, setPageNumbers] = useState([])
  useEffect(() => {
    ;(async () => {
      let pages: any = []
      const {last_page, current_page, from, to} = pagination
      if (!to) return []
      let fromPage = current_page - OFFSET
      if (fromPage < 1) fromPage = 1
      let toPage = fromPage + OFFSET * 2
      if (toPage >= last_page) {
        toPage = last_page
      }
      for (let page = fromPage; page <= toPage; page++) {
        pages.push(page)
      }
      setPageNumbers(pages)
    })()
  }, [pagination])

  return (
    <div className='d-flex flex-stack flex-wrap pt-10'>
      <ul className='pagination'>
        <li className={'page-item' + (pagination.current_page === 1 ? ' disabled' : '')}>
          <button className='page-link' onClick={() => pageChanged(1)}>
            <i className='fas fa-angle-double-left fs-4'></i>
          </button>
        </li>
        <li className={'page-item' + (pagination.current_page === 1 ? ' disabled' : '')}>
          <button className='page-link' onClick={() => pageChanged(pagination.current_page - 1)}>
            <i className='fas fa-angle-left fs-4'></i>
          </button>
        </li>
        {pageNumbers.map((pageNumber) => {
          return (
            <li
              className={
                'page-item' +
                (pageNumber === pagination.current_page ? ' page-item active btn-sm' : '')
              }
              key={pageNumber}
              onClick={() => pageChanged(pageNumber)}
            >
              <button className='page-link'>{pageNumber}</button>
            </li>
          )
        })}

        <li
          className={
            'page-item' + (pagination.current_page === pagination.last_page ? ' disabled' : '')
          }
        >
          <button className='page-link' onClick={() => pageChanged(pagination.current_page + 1)}>
            <i className='fas fa-angle-right fs-4'></i>
          </button>
        </li>
        <li
          className={
            'page-item' + (pagination.current_page === pagination.last_page ? ' disabled' : '')
          }
        >
          <button className='page-link' onClick={() => pageChanged(pagination.last_page)}>
            <i className='fas fa-angle-double-right fs-4'></i>
          </button>
        </li>
      </ul>
      <div className='fs-6 fw-bold text-gray-700'>
        <span className='pagination-total pagination__desc'>
          {intl.formatMessage({id: 'GLOBAL.TOTAL'})}
          <span className='me-2 ms-1'>
            <b>{pagination.total}</b>
          </span>
          <span className='me-2 ms-1 fs-bold'>
            {pagination.from} - {pagination.to}
          </span>
          {intl.formatMessage({id: 'GLOBAL.PAGE'})}
          <span className='ms-1 me-1'>{pagination.current_page}</span>-
          <span className='ms-1 fs-bold'>{pagination.last_page}</span>
        </span>
      </div>
    </div>
  )
}

export default Paginator
