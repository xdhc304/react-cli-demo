import React, { Component } from 'react';
import Tabbar from './index';

class Home extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/home.jpg')} alt='' />
      </div>
    );
  }
}

export default Tabbar(Home);