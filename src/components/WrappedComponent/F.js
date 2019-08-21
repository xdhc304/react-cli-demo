import React, { Component } from 'react';
import E from './E'

// @E
class F extends Component {
  componentDidMount() {
    console.log('我是原始生命周期');
  }

  render() {
    return (
      <div>
        我的div
      </div>
    );
  }
}

export default E(F);