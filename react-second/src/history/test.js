// 简化BlockdtriggerBlock的getUserConfirmation回调逻辑
function test(a, callback) {
  console.log(222)

  callback('333');
}
test(1, d => { console.log(d) })