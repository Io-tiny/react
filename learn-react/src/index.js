import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp'
import Tick from './components/Tick'
import App from './App'
import NewContext from './NewContext'

// function MyFuncComp() {
//   return <h1>组件内容</h1>
// }

ReactDOM.render(<>
  <App />
  {/* <NewContext /> */}
</>, document.getElementById('root'));