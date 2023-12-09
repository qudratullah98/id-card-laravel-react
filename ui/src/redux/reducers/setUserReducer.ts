import {UserModel} from '../../app/modules/auth'

const setUserReducer = (
  state = {user: new UserModel()},
  action: {type: string; user: UserModel}
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}
export default setUserReducer
