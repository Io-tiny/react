import { createStore, bindActionCreators } from 'redux'
import reduce from './reducer'
import * as loginAction from './action/loginAction';
import * as userAction from './action/userAction';
import { v4 as uuid } from 'uuid';

const action = {
  ...loginAction,
  ...userAction
}
const store = createStore(reduce);

console.log(store.getState());

const boundActions = bindActionCreators(action, store.dispatch);

boundActions.addUserAction( {
    name: 'heihei',
    sex:'woman'
})

boundActions.createLoginAction( {
    name: 'heihei',
    sex:'woman'
})

// store.dispatch(loginAction.createLoginAction({
//   id: uuid(),
//   name: 'heihei',
//   age: 19
// }))
console.log(store.getState());


