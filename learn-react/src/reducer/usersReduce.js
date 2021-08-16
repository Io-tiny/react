import { addUserType, deleteUserType, setUserType } from '../action/userAction'
import {v4 as uuid} from 'uuid';

const initState = [
  { id: 4, name: '小黑', age: 40 },
  { id: uuid(), name: '小越', age: 25 },
];

const reduce = (state = initState, { type, payload }) => {
  switch (type) {
    case addUserType:
      return [...state, payload];
    case deleteUserType:
      return state.filter(user => user.id !== payload);
    case setUserType:
      return state.map(user => user.id === payload.id ? { ...user, ...payload } : user);
    default:
      return state;
  }
}

export default reduce;