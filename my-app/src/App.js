import React, {Component, Fragment} from 'react';
import './pages/todo/style.css';
import {CSSTransition, TransitionGroup,Transition} from 'react-transition-group';


class App extends Component{

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    handleAddItem(){
        this.setState((prevState)=>{
            return{
                list:[...prevState.list,'item']
            }
        })
    }

    render() {
        //JSX组件以大字母开头
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el)=>{el.style.color="blue"}}
                                    appear={true}
                                    key={index}
                                >
                                <header >{item}</header>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem.bind(this)}>toggle</button>
            </Fragment>

        );
    }
}


export default App;
