import {todoStore,add_todo,get_todos} from "./reducer";


console.log(todoStore.getState());
//처음에 스토어가 가지고있는 state
todoStore.subscribe(add_todo.type,()=>alert("나는 리랜더링중~"));
//등록해주기

todoStore.dispatch(add_todo("이거 추가해주셈"));
//action을 불러와서 시켜보기

console.log(todoStore.getState());
//dispatch후 가지고 있는 state


