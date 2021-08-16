/**
 * 判断某个对象是否是一个plain-object
 * @param {*} obj 
 */
export function isPlainObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}

/**
 * 得到一个指定长度的随机字符串
 * @param {*} length 
 */
function getRandomString(length) {
  return Math.random().toString(36).substr(2, length).split("").join(".")
}

export const ActionTypes = {
  INIT() {
    return `@@redux/INIT${getRandomString(6)}`
  },
  UNKNOWN() {
    return `@@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
  }
}