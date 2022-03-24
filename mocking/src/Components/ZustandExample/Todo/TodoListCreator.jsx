import React, {useState} from 'react';
import {useStore} from "./TodoStore";

function TodoListCreator() {
    const [inputValue, setInputValue] = useState('');   //input에 적은 값을 state로 관리
    const [todoList, setTodoList] = useStore((state) => [
        state.todoListState,    //oldTodoList를 모르니 todoList를 직접 가져옴
        state.setTodoListState
    ]);

    const addItem = () => {
        setTodoList([
            ...todoList,    //oldTodoList에 새로운 todoList를 덧붙임
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue("");
    };

    //input에 적은 값이 바뀔 때 inputValue state update
    const onChange = ({target: {value}}) => {
        setInputValue(value)
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </div>
    );
}

let id = 0;

function getId() {
    return id++;
}

export default TodoListCreator;