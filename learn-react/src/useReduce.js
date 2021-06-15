import React, { useState } from 'react'

export default function useReduce(reducer, initData) {
  const [state, setState] = useState(initData);
  function dispatch(action) {
    const newState = reducer(state, action);
    setState(newState);
  }
  return [state, dispatch];
}
