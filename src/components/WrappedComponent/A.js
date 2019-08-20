import React, { Component } from 'react'

export default (title) => WrappedComponent => class A extends Component {
  // refc(instance) {
  //   instance.getName();
  // }
  constructor(props) {
    super(props);
    this.state= {
      value: ''
    }
  }

  onInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { age, ...otherProps } = this.props
    const newProps = {
      value: this.state.value,
      onInput: this.onInputChange
    }
    return (
      <div className="a-container">
        <div className="header">
          <div>{title}</div>
          <div>x</div>
        </div>
        <div>
          {/* <WrappedComponent sex={'男'} {...otherProps} ref={this.refc.bind(this)} /> */}
          <WrappedComponent sex={'男'} {...otherProps} {...newProps}/>
        </div>
      </div>
    )
  }
}