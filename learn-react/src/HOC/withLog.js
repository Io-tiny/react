import React, { Component } from 'react'

export default function withLog(Comp) {
  class WithLog extends Component {
    componentDidMount() {
      console.log('日志记录aaa')
    }
    componentWillUnmount() {
      console.log('日志记录结束')
    }

    render() {
      const { abc, ...rest } = this.props;
      return (
        <>
          <Comp {...rest} ref={abc} />
        </>
      )
    }
  }
  return React.forwardRef((props, ref) => {
    return <WithLog props={props} abc={ref} />
  })
}