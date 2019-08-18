import React from 'react';
import Axios from 'axios';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  async getApi() {
    let _this = this;
    const res = await Axios.get('/api/v1/getDetailData?uid=5a18d24351882556953957cc&device_id=1565764822676&token=eyJhY2Nlc3NfdG9rZW4iOiJ4OVM3T01VWGRpUHBsa2tNIiwicmVmcmVzaF90b2tlbiI6Im8wTHZ4TVR3SzdpY0tkdDkiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&src=web&type=entryView&postId=5d54c79ee51d4561ff6667ff');
    console.log(res);
    _this.setState({
      // data: res.data.d.content
    })
  }

  componentDidMount() {
    this.getApi();
  }

  render() {
    const html = {__html: this.state.data};
    return (
      this.state.data ?
      <div className="html-wrap" dangerouslySetInnerHTML={html}></div>
      : null
    )
  }
}

