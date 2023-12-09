import {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {HeaderWrapper} from './components/header'
import {RightToolbar} from '../partials/layout/RightToolbar'
import {ScrollTop} from './components/scroll-top'
import {Content} from './components/content'
import {FooterWrapper} from './components/footer'
import {Sidebar} from './components/sidebar'
import {
  DrawerMessenger,
  ActivityDrawer,
  InviteUsers,
  UpgradePlan,
  ThemeModeProvider,
} from '../partials'
import {PageDataProvider} from './core'
import {reInitMenu} from '../helpers'
import {ToolbarWrapper} from './components/toolbar'
import axios from 'axios'
import { UserModel } from '../../app/modules/auth'
import setUser from '../../redux/actions/setUserAction'
import { connect } from 'react-redux'

const MasterLayout = (props:any) => {
  const location = useLocation()
  useEffect(() => {
    reInitMenu()
  }, [location.key])
  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}api/user`)
        const user: UserModel = response.data
        props.setUser(
          new UserModel(
            user.id,
            user.name,
            user.email,
            user.role,
            user.permissions,
          )
        )
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
          <div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
            <HeaderWrapper />
            <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
              <Sidebar />
              <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
                <div className='d-flex flex-column flex-column-fluid'>
                  <ToolbarWrapper />
                  <Content>
                    <Outlet />
                  </Content>
                </div>
                <FooterWrapper />
              </div>
            </div>
          </div>
        </div>

        {/* begin:: Drawers */}
        <ActivityDrawer />
        {/* <RightToolbar /> */}
        <DrawerMessenger />
        {/* end:: Drawers */}

        {/* begin:: Modals */}
        <InviteUsers />
        <UpgradePlan />
        {/* end:: Modals */}
        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  )
}

const mapStateToProps = (state: {user: UserModel}) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: (user: UserModel) => dispatch(setUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterLayout)
