/**
 * 判断obj是否是一个plain-obj,即其__proto__指向Object.prototype
 * @param {*} obj 
 */
const isPlainObject = (obj) => {
  if (typeof obj !== 'object') {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}

const getRandomString = (length) => {
  return Math.random().toString(36).substr(2, length).split('').join('.');
}

const createStore = (reduce, initValue) => {

  let currencyReduce = reduce,
    currencyState = initValue;

  const listeners = [];

  function dispatch(action) {
    if (!isPlainObject) {
      throw new TypeError('action mast be a plain-obj');
    }
    if (action.type === undefined) {
      throw new TypeError('action mast has prototype of type');
    }
    currencyState = currencyReduce(currencyState, action);

    for (const listener of listeners) {
      listener();
    }
  }

  function getState() {
    return currencyState;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function () {
      const index = listeners.indexOf(listener);
      if (index === -1) {
        return;
      }
      listeners.splice(index, 1);
    }
  }

  dispatch({
    type: `@@redux/INIT${getRandomString(6)}`
  })


  return {
    dispatch,
    getState,
    subscribe
  }
}
export default createStore;