import React, {Component} from "react";
import './friends.css'

class Friends extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className='page-box2'>
                <div className='passage2'>
                    <div className='img-box2'></div>
                    <div className='text-box2'>
                        <span className='text'>新的朋友</span>
                    </div>
                </div>
                <div className='chat'>
                    <div className='img-box2'></div>
                    <div className='text-box2'>
                        <span className='text'>群聊</span>
                    </div>
                </div>
                <div  className='wechat'>
                    <div className='img-box2'></div>
                    <div className='text-box2'>
                        <span className='text'>标签</span>
                    </div>
                </div>
                <div>
                    <div className='img-box2'></div>
                    <div className='text-box2'>
                        <span className='text'>公众号</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Friends;