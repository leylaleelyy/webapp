import React from "react"
import TabsControl from "./TabsControl"
import TodoList from "./todo/TodoList";
import './header.css'
import MainList from "./mainpage/MainList";
import Friends from "./friends/Friends";
import Circle from "./circle/Circle";

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
                        <MainList />
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
