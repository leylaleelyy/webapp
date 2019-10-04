import React from 'react';
import imgURL from './duigou.svg';

class TodoItem extends React.Component{
    //父子组件的概念，父组件通过属性的形式向子组件传递参数，子组件通过props的形式来接收到父组件传递过来的参数
    //子组件如果想和父组件通信，要调用父组件传递过来的方法

    constructor(props){
        super(props);//继承的一个代码
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.delete(this.props.index);//使用这个方法，然后把值传给这个方法
        //子组件被点击的时候拿到里index调用了父组件的方法，把index传递给了父组件
        //console.log(this.props.index);获取下标
    }


    render() {
        const {content}=this.props;//es6的结构赋值
        return (
            <div className='todoitem' onClick={this.handleDelete}>
                <img className={'done'} src={imgURL} alt='' />
                {content}
            </div>
        )
    }
}
export default TodoItem;