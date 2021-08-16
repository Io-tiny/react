import { createStore, bindActionCreators } from './redux/index'
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

const bindActions = bindActionCreators(action.createLoginAction, store.dispatch);

bindActions({
  id: uuid(),
  name: 'heihei',
  age: 19
})
// bindActions.addUserAction({
//   id: uuid(),
//   name: 'heihei2',
//   age: 19
// })

// store.dispatch(loginAction.createLoginAction({
//   id: uuid(),
//   name: 'heihei',
//   age: 19
// }))
console.log(store.getState());


