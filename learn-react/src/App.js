import React, { useState, useCallback } from 'react'
// import withLog from './HOC/withLog'

// function A(props, ref) {
//   // console.log(props, ref)
//   const { abc } = props;
//   return (
//     <h1 ref={abc}>
//       组件1
//       <span>淦</span>
//     </h1>
//   )
// }
// class A extends React.Component {
//   render() {
//     return (
//       <h1>
//         组件1
//         <span>淦</span>
//       </h1>
//     )
//   }
// }

// const refA = React.forwardRef(A);
// const NewA = withLog(refA);

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.input = createRef();
//     this.txt = createRef()
//   }
//   componentDidMount() {
//     // console.log(this.input);
//     console.log(this.txt)
//   }

//   render() {
//     return (
//       <div>
//         {/* <NewA ref={this.txt} /> */}
//         <A abc={this.txt} />
//       </div>
//     )
//   }
// }

class Test extends React.PureComponent {
  render() {
    console.log('儿子重新渲染')
    return (
      <div>
        <div>传递的值为：{this.props.txt}</div>
        <button onClick={this.props.onClick}>点击</button>
      </div >
    )

  }
}

function Parent() {
  const [txt, setTxt] = useState('abc');
  const [n, setN] = useState(0);
  console.log('爹重新渲染');

  // 下面那样也会重新渲染，因为函数组件重新运行，会得到一个新的函数
  // function onClick() {
  //   setN(n + 1)
  // }
  const onClick = useCallback(
    () => {
      setN(n + 1);
    },
    []
  )

  return (
    <>
      <Test txt={txt} onClick={onClick} />
      <input type="number"
        value={n}
        onChange={e => {
          setN(parseInt(e.target.value));
        }}
      />
    </>
  )
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}