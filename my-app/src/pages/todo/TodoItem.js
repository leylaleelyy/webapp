import React from'react';

class TodoItem extends React.Component{
    //当父组件的render函数执行，子组件的render也会重新运行一次
    //1、是props本身发生了改变，2、父组件的改变
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.props.deleteItem(this.props.index);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() {
        return(//获取了传递过来的content
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
        )
    }
}


export default TodoItem;