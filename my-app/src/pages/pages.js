import React from "react"
import TabsControl from "./TabsControl"
import TodoList from "./todo/TodoList";
import './header.css'
import MainList from "./mainpage/MainList";
import Friends from "./friends/Friends";
import Circle from "./circle/Circle";
import "./mainpage/mainlist.css"

class TabComponent extends React.Component{
    render(  ){
        return(
            <div className="container">
                <TabsControl>
                    <div name = {<span>微信</span>} className='page1'>
                        <div className='header'>
                            <span>微信</span>
                            <div className='add'></div>
                            <div className='search'></div>
                        </div>
                        <div className='page-box'>
                            <div onClick={()=>{window.location.href=""}}
                                 className='passage'>
                                <div className='img-box'></div>
                                <div className='text-box'>
                                    <span >订阅号消息</span><br/>
                                    <span className='small'>[2条]共青团中央：为祖国发声音，正式首发...</span>
                                </div>
                            </div>
                            <div className='chat'>
                                <div className='img-box'></div>
                                <div className='text-box'>
                                    <span >某人</span><br/>
                                    <span className='small'>我太难了</span>
                                </div>
                            </div>
                            <div  className='wechat'>
                                <div className='img-box'></div>
                                <div className='text-box'>
                                    <span >群聊</span><br/>
                                    <span className='small'>不回去了🕊</span>
                                </div>
                            </div>
                            <div>
                                <div className='img-box'></div>
                            </div>
                        </div>
                    </div>
                    <div name = {<span>通讯录</span>} className='page1'>
                        <div className='header'>
                            <span>通讯录</span>
                            <div className='add'></div>
                            <div className='search'></div>
                        </div>
                        <Friends />
                    </div>
                    <div name = {<span>发现</span>} className='page1'>
                        <div className='header'>
                            <span>发现</span>
                            <div className='add'></div>
                            <div className='search'></div>
                        </div>
                        <Circle />
                    </div>
                    <div name = {<span>我</span>} className='page1'>
                        <div className='header'>

                        </div>
                        第四帧
                    </div>
                </TabsControl>
            </div>
        )
    }
}

export default TabComponent;
