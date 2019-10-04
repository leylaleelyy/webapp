import React,{Component} from "react";
import 'antd/dist/antd.css';
import {Input,Button,List} from "antd";
import store from '../../store'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from '../../store/actionTypes'
import {getIunputChangeAction} from '../../store/actionCreators'

class Todo extends Component{

    constructor(props){
        super(props);
        this.state=store.getState();
        store.subscribe(this.handleStoreChange.bind(this))//store里的数据发生改变，里面的函数酒会立即执行
    }

    handleInputChange(e){
        const action=getIunputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());//与store里的数据同步了
    }

    handleBtnClick(){
        const action={
            type:ADD_TODO_ITEM
        };
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action={
            type: DELETE_TODO_ITEM,
            index:index
        };
        store.dispatch(action);
    }

    render() {
        return(
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder='todo info '
                        style={{width:'200px',marginRight:"10px"}}
                        onChange={this.handleInputChange.bind(this)}
                    />                    <Button onClick={this.handleBtnClick.bind(this
                    )} type='primary'>Submit</Button>
                </div>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index)=> (
                        <List.Item onClick={this.handleItemDelete.bind(this,index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Todo;