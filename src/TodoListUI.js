import React, { Component } from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'

class TodoListUI extends Component {

  render() { 
    return ( 
      <div style={{margin: '20px'}}>
        <div>
          <Input 
            placeholder="输入框"
            style={{width: '250px',marginRight: '10px'}}
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <Button onClick={this.props.addInput}>添加</Button>
        </div>
        <div style={{margin:"10px",width: '300px'}}>
          <List
          bordered
            dataSource={this.props.list}
            renderItem={(item,index)=>(<List.Item onClick={()=>(this.props.deleteItem(index))}>{item}</List.Item>)}
          />
        </div>
      </div>
     );
  }

}
 
export default TodoListUI;
