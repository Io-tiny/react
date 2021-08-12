import * as actionTypes from './actionTypes'

export const createIncreaseAction = (payload) => {
  return {
    type: actionTypes.INCREASE,
    payload
  }
}
export const createDecreaseAction = (payload) => {
  return {
    type: actionTypes.DECREASE,
    payload
  }
}
export const createSetAction = (payload) => {
  return {
    type: actionTypes.SET,
    payload
  }
}