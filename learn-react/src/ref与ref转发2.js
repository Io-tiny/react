import React, { Component, createRef } from 'react'
import withLog from './HOC/withLog'

function A(props, ref) {
  // console.log(props, ref)
  const { abc } = props;
  return (
    <h1 ref={abc}>
      组件1
      <span>淦</span>
    </h1>
  )
}
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

const refA = React.forwardRef(A);
const NewA = withLog(refA);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.txt = createRef()
  }
  componentDidMount() {
    // console.log(this.input);
    console.log(this.txt)
  }

  render() {
    return (
      <div>
        {/* <NewA ref={this.txt} /> */}
        <A abc={this.txt} />
      </div>
    )
  }
}
