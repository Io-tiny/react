export const addLoginType = Symbol('login');

export const createLoginAction = function (payload) {
  return {
    type: addLoginType,
    payload: payload
  }
}