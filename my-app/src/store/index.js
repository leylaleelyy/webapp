import {createStore} from "redux";
import reducer from "./reducer";
//store会更新数据
const store=createStore(reducer,
    window .__REDUX_DEVTOOLS_EXTENSION__ && window .__REDUX_DEVTOOLS_EXTENSION__()
    );//创建了一个公共存储区域,传入store

export default store;