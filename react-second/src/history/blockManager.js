export default class BlockManager {
  // 保存阻塞
  prompt = null;

  constructor(getUserConfirmation) {
    // getUserConfirmation = (message, callback) => callback(window.confirm(message))
    this.getUserConfirmation = getUserConfirmation;
  }

  addBlock(prompt) {
    if (typeof prompt !== 'string' && typeof prompt !== "function") {
      throw new TypeError('你是另一个猪吗， 必须是string或者function啊')
    }
    this.prompt = prompt;
    return () => {
      this.prompt = null;
    }
  }

  triggerBlock(location, action, callback) {
    let message;
    if (!this.prompt) {
      callback();
      return;
    }
    if (typeof this.prompt === 'string') {
      message = this.prompt;
    } else if (typeof this.prompt === 'function') {
      message = this.prompt(location, action);
    }
    this.getUserConfirmation(message, result => {
      if (result === true) {
        callback();
      }
    })
  }
}