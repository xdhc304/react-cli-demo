import React, { Component } from 'react';
import  Tabbar  from "./index";

class Category extends Component {
  render() {
    return (
      <div>
        <img className='bg' src={require('../static/images/category.jpg')} alt='' />
      </div>
    );
  }
}

export default Tabbar(Category);