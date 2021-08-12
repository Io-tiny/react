import { createHashHistory } from 'history'
window.createHashHistory = createHashHistory;
window.h = createHashHistory({
  hashType:'slash',
  getUserConfirmation:(msg, callback)=>{
    callback(window.confirm(msg));
  }
})

window.unBlock = window.h.block((location, action)=>{
  return `确定要跳转到${location.pathname}吗 ${action}`;
})