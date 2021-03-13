import React from 'react';
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'

const TodoListUI = function (props) {
  return ( 
      <div style={{margin: '20px'}}>
        <div>
          <Input 
            placeholder="输入框"
            style={{width: '250px',marginRight: '10px'}}
            value={props.inputValue}
            onChange={props.changeInputValue}
          />
          <Button onClick={props.addInput}>添加</Button>
        </div>
        <div style={{margin:"10px",width: '300px'}}>
          <List
          bordered
            dataSource={props.list}
            renderItem={(item,index)=>(<List.Item onClick={()=>(props.deleteItem(index))}>{item.name}</List.Item>)}
          />
        </div>
      </div>
     );
}
 
export default TodoListUI;
