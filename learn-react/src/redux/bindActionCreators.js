const bindActionCreators = (actions, dispatch) => {
  if (typeof actions === 'function') {
    // return (...args) => {
    //   dispatch(actions(...args));
    // }
    return getAutoDispatchActionCreator(actions,dispatch);
  } else if (typeof actions === 'object') {
    const result = {};
    for (const actionKey in actions) {
      if (Object.hasOwnProperty.call(actions, actionKey)) {
        const action = actions[actionKey];
        // result[actionKey] = (...args) => {
        //   dispatch(action(...args));
        // }
        result[actionKey] = getAutoDispatchActionCreator(action,dispatch);
      }
    }
    return result;
  } else {
    throw new TypeError("actionCreators must be an object or function which means action creator")
  }

}

export default bindActionCreators;

/**
 * 将函数抽离出来 降低减少重复代码
 * 得到一个自动分发的action创建函数
 */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function (...args) {
    const action = actionCreator(...args)
    dispatch(action);
  }
}