import React, {Component} from "react";
import './mainlist.css'

class MainList extends Component{
    constructor(){
        super();
    }
    render() {
        return(
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
        )
    }
}

export default MainList;