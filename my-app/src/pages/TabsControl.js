import React,{Component,Fragment} from "react"
import "./page.css"

class TabsControl extends Component{
    constructor(){
        super();
        this.state = {
            currentIndex : 0
        }
    }

    check_item_index( index ){
        return index === this.state.currentIndex ? "tab_item show" : "tab_item"
    }
    check_title_index( index ){
        return index === this.state.currentIndex ? "tab_title active" : "tab_title"
    }

    render(){
        let _this = this;
        return(
            <Fragment>
                { /* Tab内容区域 */ }
                <div className="tab_item_wrap">
                    {
                        React.Children.map(this.props.children,( element,index )=>{
                            return(
                                    <div className={ this.check_item_index( index ) }>{ element }</div>
                            )
                        })
                    }
                </div>
                { /* 动态生成Tab导航 */ }
                <div className="tab_title_wrap">
                    {
                        React.Children.map( this.props.children , ( element,index ) => {
                            return(
                                <div
                                    onClick={() => { this.setState({ currentIndex : index }) } }
                                    className={ this.check_title_index( index ) }>{ element.props.name }
                                </div>
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
export default TabsControl;
