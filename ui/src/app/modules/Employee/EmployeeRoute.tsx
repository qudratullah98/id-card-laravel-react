import {Routes, Route, Outlet} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import EmployeeList from './components/EmployeeList'
import CreateEmployee from './components/CreateEmployee'

// const IDCardBreadCrumbs: Array<PageLink> = [
//     {
//       title: 'راپور حرکت',
//       path: '/movement-report/list',
//       isSeparator: false,
//       isActive: false,
//     },
//     {
//       title: '',
//       path: '',
//       isSeparator: true,
//       isActive: false,
//     },
//   ]

const EmployeeRoute = () => {
  const intl = useIntl()
  return (
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path='list' element={<EmployeeList />} />
        <Route
          path='create'
          element={
            <>
              <PageTitle breadcrumbs={[]}>
                {intl.formatMessage({id: 'EMPLOYEE.NEW_EMPLOYEE'})}
              </PageTitle>
              <CreateEmployee />
            </>
          }
        />
      </Route>
    </Routes>
  )
}
export default EmployeeRoute
