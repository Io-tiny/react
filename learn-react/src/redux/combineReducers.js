import { isPlainObject, ActionTypes } from "../units/units";

function validateReducers(reducers) {
  if (typeof reducers !== 'object') {
    throw new TypeError('reducers must be a object');
  }
  if (!isPlainObject(reducers)) {
    throw new TypeError("reducers must be a plain object");
  }
  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key];
      //传递一个特殊的type值
      let state = reducer(undefined, {
        type: ActionTypes.INIT()
      })
      console.log(state);
      if (state === undefined) {
        throw new TypeError("reducers must not return undefined");
      }
      state = reducer(undefined, {
        type: ActionTypes.UNKNOWN()
      })
      if (state === undefined) {
        throw new TypeError("reducers must not return undefined");
      }
    }
  }
}

const combineReducers = (reducers) => {
  // 1.验证
  validateReducers(reducers);

  /**
   * 返回一个reducer函数
   */
  return ((state = {}, action) => {
    const newState = {};
    if (action) {
      for (const key in reducers) {
        if (Object.hasOwnProperty.call(reducers, key) && typeof reducers[key] === 'function') {
          newState[key] = reducers[key](state[key], action);
        }
      }
      return newState;
    }
    return {};
  })
}

export default combineReducers;