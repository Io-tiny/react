// eslint-disable-next-line
import React, { useContext, useLocalStore } from 'react';
import ReactDOM from 'react-dom';

export const StoreContext = React.createContext(null);

export const useStore = () => {
  const store = React.useContext(StoreContext);
  return store;
}
export const store = {
  a: {
    todo: '1'
  },
  b: {
    todo: '2'
  }
}


const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <AA></AA>
    </StoreContext.Provider>
  );
}
const AA = () => {
  return (
    <p>haha</p>
  )
}

ReactDOM.render((
  <App></App>
), document.getElementById('root'))

