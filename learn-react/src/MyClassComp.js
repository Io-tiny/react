import React, { Component } from 'react'

export default class MyClassComp extends Component {
  // constructor(props) {
  //   super(props); // this.props = props;
  // }
  render() {
    return (
      <div>
        <h1>类组件内容</h1>
        <h2>{this.props.number}</h2>
      </div>
    )
  }
}
