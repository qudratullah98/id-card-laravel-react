import {Routes, Route, Outlet} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import IDCardList from './components/IDCardList'
import CreateIDCard from './components/CreateIDCard'

const IDCardRoute = () => {
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
        <Route
          path='create'
          element={
            <>
              <PageTitle breadcrumbs={[]}>
                {intl.formatMessage({id: 'CARD.CREATE_EMPLOYEE'})}
              </PageTitle>
              <CreateIDCard />
            </>
          }
        />
        <Route
          path='/:id/list'
          element={
            <>
              <IDCardList />
            </>
          }
        />
      </Route>
    </Routes>
  )
}
export default IDCardRoute
