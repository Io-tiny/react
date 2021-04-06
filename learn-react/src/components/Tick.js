import React, { Component } from 'react'

export default class Tick extends Component {

  // 初始化状态
  state = {
    left: this.props.number,
  }
  constructor(props) {
    super(props);

    // 初始化状态
    // this.state = {
    //   left: this.props.number,
    // }

    this.timer = setInterval(() => {
      if (this.state.left === 0) {
        clearInterval(this.timer);
        return;
      }
      this.setState({
        left: this.state.left - 1
      });
    }, 1000);
  }
  render() {
    return (
      <h1>
        倒计时剩余时间：{this.state.left}
      </h1>
    )
  }
}
