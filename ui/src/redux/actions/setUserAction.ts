import {UserModel} from '../../app/modules/auth'

const setUser = (user: UserModel) => {
  return {
    type: 'SET_USER',
    user: user,
  }
}
export default setUser
