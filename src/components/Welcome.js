import React from 'react';

class Welcome extends React.Component{

  componentDidMount() {
    new Promise(function (resolve, reject) {
      console.log('start new Promise...');
      var timeOut = Math.random() * 2;
      console.log('set timeout to: ' + timeOut + ' seconds.');
      setTimeout(function () {
        if (timeOut < 1) {
          console.log('call resolve()...');
          resolve('200 OK');
        }
        else {
          console.log('call reject()...');
          reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
    }).then(function (result) { // 这里的参数result就是resolve方法通过参数传出的内容
      console.log('Done: ' + result);
    },function (result) { // 这里的参数result就是reject方法通过参数传出的内容
      console.log('Failed: ' + result);
    });

  // 0.5秒后返回input*input的计算结果:
  function multiply(input) {
    return new Promise(function (resolve, reject) {
      console.log('calculating ' + input + ' x ' + input + '...');
      setTimeout(resolve, 500, input * input);
    });
  }

  // 0.5秒后返回input+input的计算结果:
  function add(input) {
    return new Promise(function (resolve, reject) {
      console.log('calculating ' + input + ' + ' + input + '...');
      setTimeout(resolve, 500, input + input);
    });
  }

  var p = new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    resolve(123);
  });

  p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(function (result) {
      console.log('Got value: ' + result);
    });
  }

  render() {
    const todoList = ['hello','hi'];
    const isLogin = true
    return <div className="box">
      <h1>Hello React</h1>
      <ul>
        {
          todoList.map(item=>
            <li key={item}>{item}</li>  
          )
        }
      </ul>
      <h3>{isLogin?'你已经登录':'请登录'}</h3>
    </div>   
  }
}

export default Welcome