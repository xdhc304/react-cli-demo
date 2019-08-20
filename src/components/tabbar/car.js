import React, { Component } from 'react';
import Tabbar from './index'

class Car extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/car.jpg')} alt='' />
      </div>
    );
  }
}

export default Tabbar(Car);