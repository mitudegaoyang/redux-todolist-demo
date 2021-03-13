import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import {changeInputAction,addInputAction,deleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

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
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        addInput={this.addInput}
        deleteItem={this.deleteItem}
      >

      </TodoListUI>
     );
  }

}
 
export default TodoList;
