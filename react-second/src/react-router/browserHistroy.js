import { createBrowserHistory } from 'history'

window.createBrowserHistory = createBrowserHistory;

window.h = createBrowserHistory({
  baseName: '/',
  forceRefresh: false,
  keyLength: 4,
  // getUserConfirmation: (msg, callback) => {
  //   console.log(msg);
  //   callback(window.confirm(msg));
  // }
})

// window.unBlock = window.h.block((newPath, action) => {
//   return `确定要跳转到${newPath.pathname}吗 ${action}`;
// })

// window.unListen = window.h.listen((location, action) => {
//     console.log(location)
//     window.h.action = action;
// })