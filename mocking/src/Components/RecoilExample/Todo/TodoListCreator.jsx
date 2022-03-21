import React, {useState} from 'react';
import {useSetRecoilState} from "recoil";
import {todoListState} from "./TodoStore";

function TodoListCreator() {
    const [inputValue, setInputValue] = useState('');   //input에 적은 값을 state로 관리
    const setTodoList = useSetRecoilState(todoListState);

    //리스트 추가
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
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