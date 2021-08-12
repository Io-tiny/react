import { createStore, bindActionCreators } from 'redux'
import * as actionTypes from './action/actionTypes'
import * as actions from './action/createAction'
// const action = {
//   type: 'increase',
//   payload: 10
// }

const reduce = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return state + action.payload;
    case actionTypes.DECREASE:
      return state - action.payload;
    case actionTypes.SET:
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(reduce, 20);
const boundActions = bindActionCreators(actions, store.dispatch);
console.log(store.getState());
// store.dispatch(actions.createDecreaseAction(5));
// console.log(store.getState());
// store.dispatch(actions.createIncreaseAction(10));
// console.log(store.getState());
// store.dispatch(actions.createSetAction(100));
// console.log(store.getState());
boundActions.createIncreaseAction(5);
console.log(store.getState());
