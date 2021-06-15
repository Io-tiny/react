import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let unBlock, prevLocation, location, action, unListen;

class _GuardHelper extends Component {
  componentDidMount() {
    unBlock = this.props.history.block((newLocation, ac) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;
      return '';
    })
    unListen = this.props.history.listen((location, ac) => {
      if (this.props.beforeChange) {
        prevLocation = this.props.location;
        this.props.beforeChange(prevLocation, location, ac, unListen)
      }
    })
  }

  componentWillUnmount() {
    unBlock();
    unListen()
  }

  render() {
    return (
      null
    )
  }
}

const GuardHelper = withRouter(_GuardHelper);

class RouterGroup extends Component {

  handleConfirm = (msg, commit) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(prevLocation, location, action, commit, unBlock);
    } else {
      commit(true);
    }
  }

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GuardHelper beforeChange={this.props.beforeChange} />
        {
          this.props.children
        }
      </Router>
    )
  }
}
export default (RouterGroup);