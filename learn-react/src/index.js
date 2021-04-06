import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp'
import Tick from './components/Tick'

// function MyFuncComp() {
//   return <h1>组件内容</h1>
// }

ReactDOM.render(<>
  <Tick number={10} />
</>, document.getElementById('root'));