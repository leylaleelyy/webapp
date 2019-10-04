import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes'

const defaultState={
    inputValue:'',
    list:[]
};//默认数据空对象
//创建reducer
//reducer可以接收state，但是绝对不能修改state
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));//深拷贝
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        if(newState.inputValue!==''){
            newState.list.push(newState.inputValue);
            newState.inputValue='';
            return newState;
        }
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}
//state存放着所有数据的信息