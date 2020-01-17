import React from 'react';
import { Input, Button, List } from 'antd'; // 引入antd组件库
import 'antd/dist/antd.css'; // 引入antd样式

// 1. 创建一个store管理仓库,从redux库中引入一个createStore函数
import { createStore } from 'redux';

// 2. 引入createStore后,store并没有创建,需要调用createStore()后才有store
const store = createStore(reducer); // 创建好reducer后,需要将reducer作为参数传到createStore当中去,这样store才能拿到reducer的state数据

// 3. 创建reducer函数,管理组件共享的数据状态以及一些动作
// reducer是一个纯函数,返回一个新的state给store
// 4. 初始化state值,将原先组件内部的状态的数据,移除到reducer里面去管理
function reducer(state = {
	inputValue: 'itclanCoder',
	list: ['itclanCoder', '川川', '学习Redux']
}, action){
	return state;
}

// TodoList组件
class reduxDemo extends React.Component {
	constructor(props){
		super(props);
		// 5. 在组件内部通过getState()方法就可以拿到store里面的数据,该方法能够获取到store上存储的所有状态
		this.state = store.getState();
		
	}
    render() {
        return (
            <div style={{ margin: "10px 0 0 10px"}}>
                    <div>
                        <Input value={this.state.inputValue} style={{ width:"300px",marginRight:"10px"}}  placeholder="请输入内容..." />
                        <Button type="primary">提交</Button>
                    </div>
                    <List
                      style={{ width: '300px',marginTop:'10px'}}
				      bordered
				      dataSource={this.state.list}
				      renderItem={item => <List.Item>{item}</List.Item>}/>
            </div>
        )
    }
}

export default reduxDemo;
