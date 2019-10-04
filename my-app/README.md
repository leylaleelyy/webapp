# 项目介绍
## 一些介绍
package里有一些命令，包文件 node里的一些内容

git里面不上传的项目

node里面的是一些第三方的模块

### public
ico小图标

index.html 一个主页的模板

### src
index.js入口文件，引入了react...
js中可以引入css


## react中的组件
可以把一个页面拆分成不同的组件，一步一步的拆分来实现。
一个复杂的页面可以拆分来实现和维护。前端组件化的概念

用到了JSX语法就必须文件里引入react

## 响应式设计思想和事件绑定
解析todolist的功能

输入内容提交，实现内容添加到列表

react是一个响应式框架，强调的是操作数据，通过数据的变化自动生成dom，只需要关注数据上的变化

数据驱动的编程理念

JSX的注释{/\*注释\*/}

父组件向子组件传递值，是属性，既可以是数据也可以是方法

子组件通过this.props来接收

子组件想要调用父组件的方法去改变数据，通过this.props.属性()

传递父组件方法给属性的时候需要bind对this做一个绑定

## react的思考
声明式的开发方式（jquery是命令式的）减少了很多dom操作

可以与其他框架并存,比如可以直接操作那个index.html的

组件化的开发
class定义组件

首字母大写区分

组件间的传值的方法

单向数据流，要求父组件可以向子组件传递内容，子组件只能使用这个值，不能够改变这个值，是只读的

## 参数
PropTypes与DefaultProps

##Props，State与render函数
当组件的state或者props发生改变的时候，render函数会重新执行

this.props是父组件通过属性传递过来的内容

##虚拟DOM
1、state数据

2、模板。render函数jsx的代码

3、数据+模板结合，生成真实的DOM

4、state发生改变

5、数据+模板结合，生成真实的DOM，替换原始的DOM

缺陷：第一次生成了一个完整的DOM片段，第二次又生成了一个，第二次的DOM替换第一次，非常耗费性能


1、state数据

2、模板。render函数jsx的代码

3、数据+模板结合，生成真实的DOM

4、state发生改变

5、数据+模板结合，生成真实的DOM，并不直接替换原始的DOM

6、新的DOM和原始的DOM对比，找差异

7、只改变有差异的部分

性能提升不是很明显，有对比的性能损耗

虚拟DOM
、
1、state数据

2、模板。render函数jsx的代码

3、数据+模板结合，生成真实的DOM

\<div id="abc">\<span>hello\</span>\</div>

4、生成虚拟DOM（就是一个js对象，用它来描述真实的DOM）

['div',{id:'abc'},['span,{},'hello']]   虚拟DOM

5、state发生变化

6、生成一个新的虚拟DOM,仅仅改变对象里的内容

7、比较原始虚拟DOM与新的虚拟DOM的

8、直接操作DOM，改变里面的内容（减少了对真实DOM的创建和对比）

##深入理解虚拟DOM

##React中ref的使用
ref是一个引用，操作DOM

##生命周期函数
指在某一个时刻组件会自动调用执行的函数，render就是

###initialization初始化的过程，setup props and state

###mounting 挂载，13只在第一次挂载的时候被执行

1、componentWillMount() 在组件即将被挂载到页面上之前执行

2、把组件内容render到界面上

3、componentDidMount() 挂载之后被执行

###updation

props发生变化

1、componentWillReceiveProps()顶层组件就没有props参数就不会执行，于是当它用于子组件，接收到父组件的props，就会接收到props的变化

当一个组件从父组件接收参数，但是如果是第一次存在于父组件中，就不会执行。已经存在了，就会执行。父组件的render函数执行了，子组件的这个生命周期函数就会执行

2、shouldComponentUpdate()在组件被更新前会自动执行，return true
。返回一个布尔值，返回false就会阻止render的更新执行

3、componentWillUpdate()组件被更新之前会自动执行在should之后被执行

4、render函数执行，重新渲染

5、componentDidUpdate()

state就是没有1、

###Unmounting
1、componentWillUnmount，组件即将被从页面中移除的时候执行

##生命周期函数的使用场景
render是必须的，因为它不是内置的，需要自己来定义

提升子组件的性能

##使用Charles进行接口数据模拟

##css过渡动画

##Redux概念简述
有一个store来实现对多个节点的通信，改变麻烦的组件传值

数据层框架

对store数据的更新，其他组件也可以感知到这个数据的变化

把组件数据放到一个公用存储区存储，取到数据更简单

Redux=Reducer+Flux

##Redux工作流程
store放所有的数据（管理员，管理数据）

reducers （记录本，记录位置）

react component组件（借书的人）

action creators（命令，要干啥）

一个组件向store发命令，store接收到命令，用reducer查询什么样的数据
把对应的数据给store

##Store的创建

#Redux知识点
##Redux设计和使用的三个原则
store是唯一的，只有一个store

只有store能够改变自己的内容（reducer是拿到之前的数据，然后它自己复刻了一个数据，改变了复刻的数据之后，把新的数据返回给store，然后store自己用新的数据更新）

Reducer必须是个纯函数，给定固定的输入就有固定的输出，而且不会有副作用。比如就不能说=new Date()。这个就不是一个固定的返回结果
接受参数，但是不要修改接受的参数，reducer就不要改变state

##Redux核心的API
###createStore创建一个store
store里有一个*store.dispatch*的方法，帮助派发action

action会被传递给store

*store.getState*的方法会帮助get到store里的所有的数据内容

*store.subscribe*监听store的改变，只要store发生改变，接受的回调函数就立即执行

##UI组件和容器组件的拆分
UI组件做页面渲染，容器组件来处理它的逻辑