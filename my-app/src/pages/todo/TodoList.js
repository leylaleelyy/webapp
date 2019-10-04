import React,{Component,Fragment} from 'react';
import TodoItem from "./TodoItem";
import imgAdd from "./icon_tianjia.svg";


//定义一个react组件
class TodoList extends Component{
	//当组件的state或者props发生改变的时候，render函数会重新执行
	constructor(props){//组件的构造函数，组件被创建的时候，这个函数自动执行
		super(props);//初始化
		this.state={//组件数据存放的位置，一个数据项
			list: [],
			inputValue:''
		};
		this.handleInputChange=this.handleInputChange.bind(this);
	}

	handleBtnClick(){//绑定事件的函数，点击新增就增加内容。react中不需要操作dom了
		/*在button上绑定事件*/
		if(this.state.inputValue!==''){
			this.setState({
				list:[...this.state.list,this.state.inputValue],//改变list的数据，展开运算符
				inputValue:''//清空input
			});
		}

		//this.state.list.push('Hello world');报错，它指向了按钮，调用函数,在onclick添加bind指向外面的this以解决
	}

	handleInputChange(e){
		this.setState({
			inputValue:e.target.value
		});
		console.log(e.target.value);
	}

	/*handleItemClick(index){
		/*this.state.list.splice(index,1);
		this.setState({
			list:this.state.list
		});*
		const list=[...this.state.list];//拿到state里的list，复制它
		list.splice(index,1);//debug更好，虽然写的麻烦，复刻一下
		this.setState({list});//es6中，键值相同可以省略
		this.setState({
			list: list//把state里的list，改成删除完成的list
		})
	} */

	handleDelete(index){
		//console.log(index);
		const list=[...this.state.list];//拿到state里的list，复制它
		list.splice(index,1);//debug更好，虽然写的麻烦，复刻一下
		this.setState({list});//es6中，键值相同可以省略
	}

	getTodoItems(){//避免render渲染过多，把获取item的操作重新命名一个函数
		return (
			this.state.list.map((item,index) => {
				return (
					<TodoItem
						delete={this.handleDelete.bind(this)}
						key={index}
						content={item}
						index={index}
					/>
				);//子组件可以收到父组件传递的属性
				//向子组件传递了一个属性，这里头是一个方法
				//return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>//循环list上的项,给不同的key值
			})
		)
	}

	//必须有一个render函数，它返回的就是想要显示渲染的内容
	//return回去的只能是一个大的JSX，不支持多个，解决，嵌套到一个大的标签里
	render() {
		return (
			<Fragment>
				<div className='input-box'>
					<div className='itemTitle'>What is your main focus for today?</div>
					<input value={this.state.inputValue} onChange={this.handleInputChange}/>
					<img className='btn' onClick={this.handleBtnClick.bind(this)} src={imgAdd} alt=''/>
				</div>
				<ul>{this.getTodoItems()}</ul>
			</Fragment>
		);
	}
}

export default TodoList;//导出组件，然后导入
//this指向的内容。es6的语法，class，展开运算符，constructor，箭头函数