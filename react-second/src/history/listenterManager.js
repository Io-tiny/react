export default class ListenerManager {

  // 监听可以有多个 所需需要一个数组来存储监听函数
  listeners = [];

  addListener(listener) {
    this.listeners.push(listener);
    const unListener = () => {
      const index = this.listeners.indexOf(listener);
      this.listeners.splice(index, 1);
    }
    return unListener
  }

  /**
   * 触发监听器，执行数组中的所有的监听函数（执行顺序为队列顺序，先监听的先触发）
   * @param {*} location 对象里面包含跳转后的新的location
   * @param {*} action 跳转的方式
   */
  triggerListener(location, action) {
    for (const listener of this.listeners) {
      listener(location, action)
    }
  }

}