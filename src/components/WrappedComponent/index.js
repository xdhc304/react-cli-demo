import React, { Component } from 'react';
import A from './A'
import B from './B'
import C from './C'

class WrappedComponent extends Component {
  render() {
    return (
      <div>
        <A></A>
        <B name={'张三'} age={18}></B>
        <C></C>
      </div>
    );
  }
}

export default WrappedComponent;