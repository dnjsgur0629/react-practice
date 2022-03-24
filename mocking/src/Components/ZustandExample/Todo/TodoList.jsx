import React from 'react';
import TodoItem from "./TodoItem";
import {useStore} from "./TodoStore";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
    const todoList = useStore((state) => state.filteredTodoListState())
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