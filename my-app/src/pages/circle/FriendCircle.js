import React,{Component,Fragment} from "react";
import './friendcircle.css'
class FriendCircle extends Component{
    render() {
        return(
            <Fragment>
                <header className='circle-header'>
                    <div className='img-back'
                         onClick={()=>{window.location.href="/"}} >
                    </div>
                    <div className='img-edi'></div>
                </header>
                <div className='head-bg'>
                    <div className="container1">
                        <span className="pillar"></span>
                        <span className="pillar"></span>
                        <span className="pillar"></span>
                        <span className="pillar"></span>
                        <span className="pillar"></span>
                    </div>
                    <div className="container-bg">
                        <div>W</div>
                        <div>E</div>
                        <div>L</div>
                        <div>C</div>
                        <div>O</div>
                        <div>M</div>
                        <div>E</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='icon-img'></div>
                    <div className='my-name'>AfterWeb</div>
                </div>
            </Fragment>
        )
    }
}
export default FriendCircle;