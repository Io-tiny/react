import { addLoginType } from '../action/loginAction'

const initState = null;

const reduce = (state = initState, action) => {
  // console.log(action.type,state);
  switch (action.type) {
    case addLoginType:
      return action.payload
    default:
      return state;
  }
}

export default reduce;

