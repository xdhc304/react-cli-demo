import React, { Component } from 'react';
import Axios from 'axios';

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  async getBlogList() {
    let _this = this;
    const res = await Axios.get('/api/blog/listblog');
    console.log(res);
    _this.setState({
      data: res.data
    })
  }

  componentDidMount() {
    this.getBlogList();
  }

  render() {
    return (
      <div>
          
      </div>
    )
  }
}
