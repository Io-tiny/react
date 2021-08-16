export const addUserType = Symbol('add-user');
export const deleteUserType = Symbol('delete-user');
export const setUserType = Symbol('set-user');


export const addUserAction = (user) => {
  return {
    type: addUserType,
    payload: user
  }
}
export const deleteUserAction = (id) => {
  return {
    type: deleteUserType,
    payload: id
  }
}
export const setUserAction = (id, user) => {
  return {
    type: setUserType,
    payload: {
      ...user,
      id
    }
  }
}