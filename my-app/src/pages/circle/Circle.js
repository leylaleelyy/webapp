import React, {Component} from "react";
import './circle.css'

class Circle extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className='page-box3'>
                <div className='passage3'>
                    <div className='img-box3'></div>
                    <div className='text-box3'>
                        <span className='text'>朋友圈</span>
                    </div>
                    <div className='img-arrow'></div>
                </div>
                <div className='chat'>
                    <div className='img-box3'></div>
                    <div className='text-box3'>
                        <span className='text'>扫一扫</span>
                    </div>
                    <div className='img-arrow'></div>
                </div>
                <div  className='wechat'>
                    <div className='img-box3'></div>
                    <div className='text-box3'>
                        <span className='text'>摇一摇</span>
                    </div>
                    <div className='img-arrow'></div>
                </div>
                <div className='little'>
                    <div className='img-box3'></div>
                    <div className='text-box3'>
                        <span className='text'>小程序</span>
                    </div>
                    <div className='img-arrow'></div>
                </div>
            </div>
        )
    }
}

export default Circle;