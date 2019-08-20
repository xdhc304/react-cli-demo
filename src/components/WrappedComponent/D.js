import React, { Component } from 'react';

function d(WrappedComponent) {
  class D extends Component {
    render() {
      return (
        <div>
          我是高阶组件D
          <WrappedComponent></WrappedComponent>
        </div>
      );
    }
  }
}

export default d;