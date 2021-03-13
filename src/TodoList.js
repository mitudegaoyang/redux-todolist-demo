import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import store from './store'
// import {CHANGE_INPUT,ADD_INPUT,DELETE_ITEM} from './store/actionTypes'
import {changeInputAction,addInputAction,deleteItemAction} from './store/actionCreators'

let data = ['1','2','3']

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addInput = this.addInput.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }

  storeChange () {
    this.setState(store.getState())
  }

  changeInputValue = (e) => {
    // console.log(e.target.value)
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  addInput () {
    const action = addInputAction()
    store.dispatch(action)
  }

  deleteItem (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  render() { 
    return ( 
      <div style={{margin: '20px'}}>
        <div>
          <Input 
            placeholder="输入框"
            style={{width: '250px',marginRight: '10px'}}
            value={this.state.inputValue}
            onChange={this.changeInputValue}
          />
          <Button onClick={this.addInput}>添加</Button>
        </div>
        <div style={{margin:"10px",width: '300px'}}>
          <List
          bordered
            dataSource={this.state.list}
            renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
          />
        </div>
      </div>
     );
  }

}
 
export default TodoList;
