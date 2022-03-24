import React from 'react';
import {useStore} from "./TodoStore";

function TodoItem({item}) {
    const [todoList, setTodoList] = useStore((state) => [
        state.todoListState,
        state.setTodoListState]);
    const index = todoList.findIndex((listItem) => listItem === item)   //현재 item과 동일한 listitem의 index를 찾아옴

    //추가되어있는 item의 text를 변경
    const editItemText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });
        setTodoList(newList);
    }

    //item이 완료되었는지를 토글
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });
        setTodoList(newList);
    }

    //item 삭제
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    }

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText}/>
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion}/>
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}


export default TodoItem;