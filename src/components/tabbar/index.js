import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../static/iconfont.css'
import './index.css'

const tabbarArr = [
  {
    img: 'icon-home',
    text: '首页',
    link: '/home'
  },
  {
    img: 'icon-fenlei',
    text: '分类',
    link: '/category'
  },
  {
    img: 'icon-gouwuche',
    text: '购物车',
    link: '/car'
  },
  {
    img: 'icon-yonghu',
    text: '我的',
    link: '/user'
  }
]

const Tabbar = (WrappedComponent) => class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  

  itemChange = (i) => {
    this.setState({
      index: i
    })
  }

  render() {
    const url = window.location.href;
    return (
      <div className="tabbar-container">
        <div className="tabber-children">
          <WrappedComponent></WrappedComponent>
        </div>
        <div className="tabbar App">
          <div className="tabbar-content">
            {
              tabbarArr.map((v, i) => (
                <Link to={v.link} key={i} className={"tabbar-item" + (url.indexOf(v.link) > -1 ? ' active': '')} onClick={() => this.itemChange(i)}>
                  <div className={'iconfont ' + v.img}></div>
                  <div>{v.text}</div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Tabbar;