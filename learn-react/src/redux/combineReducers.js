import { isPlainObject, ActionTypes } from "../units/units";
/**
 * 用于验证reducer是否符合规范，其中的for循环是为了检验每一个reducer是否给了初始值，因为reducer不能返回undefined，所以如果传入的state为undefined为undefined的话就会使用初始值；如果没设置初始值就会报错
 * @param {*} reducers reduce集合
 */
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