import compose from './compose'

const applyMiddleware = function (...middlewares) {
  return function (createStore) {
    return function (reducer, initState) {
      const store = createStore(reducer, initState);
      let dispatch = () => {
        throw new Error('还不能使用dispatch');
      }
      const simpleStore = {
        getState: store.getState,
        dispatch: store.dispatch
      }
      //给dispatch赋值
      //根据中间件数组，得到一个dispatch创建函数的数组
      const dispatchProducers = middlewares.map(mid => mid(simpleStore));
      const composeMiddleware = compose(...dispatchProducers);
      dispatch = composeMiddleware(store.dispatch);
      return {
        ...store,
        dispatch
      }
    }
  }
}

export default applyMiddleware;