import loginUser from './loginReduce';
import users from './usersReduce';
import { combineReducers } from 'redux'
const myCombineReducers = (oldState => {
  return ((state = {}, action) => {
    const newState = {};
    if (action) {
      for (const key in oldState) {
        if (Object.hasOwnProperty.call(oldState, key) && typeof oldState[key] === 'function') {
          newState[key] = oldState[key](state[key], action);
        }
      }
      return newState;
    }
    return {};
  })
})

const reduce = combineReducers({
  loginUser,
  users
})
// const reduce = ((state = {}, action) => {
//   const newState = {
//     loginUser: loginUser(state.loginUser, action),
//     users: users(state.users, action)
//   }
//   return newState;
// })

export default reduce;