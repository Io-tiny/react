import BlockManager from "./blockManager";
import ListenerManager from "./listenterManager";

export default function createBrowserHistory(options) {
  const {
    baseName,
    forceRefresh = false,
    keyLength = 4,
    getUserConfirmation = (message, callback) => callback(window.confirm(message))
  } = options;

  const listenerManager = new ListenerManager();
  const blockManager = new BlockManager(getUserConfirmation);

  function go(step) {
    window.history.go(step);
  }
  function back() {
    window.history.back();
  }
  function forward() {
    window.history.forward();
  }


  /**
   * 
   * @param {*} path push的新的地址 可以是字符串，也可以是对象
   * @param {*} state 附加的数据，如果第一个参数是对象，则该参数无效
   */
  function push(path, state) {
    changePage(path, state, true);
  }

  function replace(path, state) {
    changePage(path, state, false);
  }

  function changePage(path, state, isPush) {
    let action = 'PUSH';
    if (!isPush) {
      action = 'REPLACE';
    }
    const pathInfo = handlePathAndState(path, state, baseName);
    const location = createLocationByPath(pathInfo, baseName);
    blockManager.triggerBlock(location, action, () => {
      if (isPush) {
        window.history.pushState({
          key: createKey(keyLength),
          state: pathInfo.state
        }, null, pathInfo.path)
      } else {
        window.history.replaceState({
          key: createKey(keyLength),
          state: pathInfo.state
        }, null, pathInfo.path)
      }
      listenerManager.triggerListener(location, action);
      history.location = location;
      history.action = action;
      if (forceRefresh) {
        window.location.href = pathInfo.path;
      }
    })
  }

  function createHref(location) {
    if (typeof location === 'string') {
      return location;
    }
    return baseName + location.pathname + location.search + location.hash
  }


  /**
   * 添加对地址监听的变化，在地址变化之后需要执行监听函数
   */
  function addDomListener() {
    // popstate事件只能监听前进、后退、用户对地址hash的改变
    // 无法监听pushState、replaceState的变化
    window.addEventListener('popstate', () => {
      const location = createLocation(baseName);
      const action = 'POP';
      blockManager.triggerBlock(location, action, () => {
        listenerManager.triggerListener(location, action);
        history.location = location;
      })
    })
  }
  addDomListener();

  /**
   * 添加一个监听器，并且返回一个可用于取消监听的函数
   * @param {*} listener 监听执行函数
   */
  function listen(listener) {
    return listenerManager.addListener(listener);
  }

  function block(prompt) {
    return blockManager.addBlock(prompt);
  }

  const history = {
    action: 'POP',
    go,
    back,
    forward,
    createHref,
    push,
    block,
    listen,
    replace,
    location: createLocation(baseName)
  }
  return history;
}

/**
 * 
 * @param {*} location 如果是字符串的时候为path，可以直接跳转，无需考虑basename；如果是对象的话，那就是location，需要考虑basename、hash、search等对于path的影响
 * @param {*} state 保存的数据
 * @param {*} baseName 
 * @returns 
 */
function handlePathAndState(location, state, baseName = '') {
  let result = {};
  if (typeof location === 'string') {
    result = {
      location,
      state
    }
    return result;
  } else if (typeof location === 'object') {
    let newPath = baseName + location.pathname;
    let { search = "", hash = "" } = location;
    if (search.charAt(0) !== "?") {
      search = "?" + search;
    }
    if (hash.charAt(0) !== "#") {
      hash = "#" + hash;
    }
    newPath += search;
    newPath += hash;
    return {
      path: newPath,
      state: location.state,
    }
  } else {
    throw new TypeError('你是傻逼吗！')
  }
}

function createLocation(baseName = "") {
  const reg = new RegExp(`^${baseName}`)
  let pathname = window.location.pathname.replace(reg, '');
  let hash = window.location.hash;
  let state;
  let pathState = window.history.state;
  const location = {
    pathname,
    hash,
    search: window.location.search
  }

  // 处理state
  if (pathState === null) {
    state = null;
  } else if (typeof pathState !== 'object') {
    state = pathState
  } else {
    if ('key' in pathState) {
      location.key = pathState.key;
      state = pathState.state;
    } else {
      state = pathState;
    }
  }
  location.state = state;
  if (pathname.charAt(0) !== '/') {
    pathname = '/' + pathname
  }
  if (hash.charAt(0) !== '#') {
    hash = '#' + hash;
  }
  return location;
}

const createKey = (keyLength) => {
  return Math.random().toString(36).substr(2, keyLength);
}

window.result = createBrowserHistory({
  baseName: '/news',
  // forceRefresh: true
})

function createLocationByPath(pathInfo, baseName) {
  let { path } = pathInfo;
  console.log(path);
  let pathname, hash, search;
  let questionIndex = path.indexOf('?');
  let sharpIndex = path.indexOf('#');

  const reg = new RegExp(`^${baseName}`)
  pathname = path.replace(reg, '');

  if (questionIndex === -1) {
    search = '';
  } else if (questionIndex > sharpIndex) {
    if (sharpIndex === -1) {
      search = path.substring(questionIndex)
    } else {
      search = '';
    }
  } else {
    search = path.substring(questionIndex, sharpIndex)
  }
  if (sharpIndex === -1) {
    hash = ''
  } else {
    hash = path.substring(sharpIndex);
  }
  return {
    hash,
    pathname,
    search,
    state: pathInfo.state
  }
}
// window.createLocationByPath = createLocationByPath;