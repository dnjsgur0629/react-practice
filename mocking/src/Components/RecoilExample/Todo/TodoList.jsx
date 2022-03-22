import React from 'react';
import {filteredTodoListState} from "./TodoStore";
import {useRecoilValue} from "recoil";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState)
    return (
        <div>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoListCreator/>
            {todoList.map(item => (
                <TodoItem key={item.id} item={item}/>
            ))}
        </div>
    );
}

export default TodoList;