import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp'

// function MyFuncComp() {
//   return <h1>组件内容</h1>
// }

ReactDOM.render(<>
  <MyFuncComp number={1} />
  <MyClassComp number={1} />
</>, document.getElementById('root'));