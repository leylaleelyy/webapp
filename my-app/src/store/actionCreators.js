import {CHANGE_INPUT_VALUE} from "./actionTypes";

export const getIunputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});//创建封装返回了action