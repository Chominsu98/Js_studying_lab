import { createStore } from "./createStore.js";

const initialState=[];
//기본적으로 여러가지 state를 관리하기 위한 배열을 디폴트로 줌

//action 타입
const ADD_TODO="add_todo";
const GET_TODOS="get_todos";

//action 만들기

export const add_todo=(data)=>({
    type:ADD_TODO,
    data
});

export const get_todos=()=>({
    type:GET_TODOS  
});

//reducer 만들기

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.data];
        case GET_TODOS:
            return state;
        default:
            return state;
    }
}

export const todoStore=createStore(initialState,reducer);
//만든 스토어를 호출하여 하나의 스토어를 생성해준다

