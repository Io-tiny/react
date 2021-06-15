import React, { Component, createRef } from 'react'

function A(props, ref) {
  console.log(props, ref)
  return (
    <h1 ref={ref}>
      组件1
      <span>淦</span>
    </h1>
  )
}

const NewA = React.forwardRef(A);


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
        <NewA word={'aaaxxxdd'} ref={this.txt} />
        <input ref={this.input} type="text" />
        <button onClick={() => {
          this.input.current.focus();
        }}>聚焦</button>
      </div>
    )
  }
}
