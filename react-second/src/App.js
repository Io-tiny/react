import RouterGroup from './RouterGroup'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function page1() {
  return (
    <div>
      page1
    </div>
  )
}

function page2() {
  return (
    <div>page2</div>
  )
}


function App() {
  return (
    <RouterGroup
      onBeforeChange={(prev, now, action, commit, unBlock) => {
        console.log(`从${prev.pathname}跳转到${now.pathname}, 方式是${action}`);
        unBlock();
        commit(true);
      }}
      beforeChange={(prev, now, action, unListen) => {
        console.log(`从${prev.pathname}跳转到${now.pathname}, 方式是${action}`);
        unListen();
      }}
    >
      <ul>
        <li>
          <Link to="/page1">页面1</Link>
        </li>
        <li>
          <Link to='/page2'>页面2</Link>
        </li>
      </ul>
      <Route path={'/page1'} component={page1}></Route>
      <Route path={'/page2'} component={page2}></Route>
    </RouterGroup >
  );
}

export default App;
