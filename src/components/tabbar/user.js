import React, { Component } from 'react';
import Tabbar from './index'

class User extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/user.jpg')} alt='' />
      </div>
    );
  }
}

export default Tabbar(User);