import {action, autorun, computed, flow, makeAutoObservable, makeObservable, observable} from "mobx";
import axios from "axios";

class ObservableTodoStore {
    todos = [];
    pendingRequests = 0;

    constructor() {
        makeObservable(this, {
            todos: observable,
            pendingRequests: observable,
            completedTodosCount: computed,
            report: computed,
            addTodo: action,
            fetchData: flow,
        });
        // makeAutoObservable(this);
        autorun(() => console.log(this.report));    //autorun으로 report값이 바뀌면 log를 찍도로 함
    }

    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        if (this.todos.length === 0)
            return "<none>";
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }

    fetchData = function* () {  // *: generate 문법
        const fetchTodo = async () => {
            const response = await axios.get('/todo');
            return response.data.todo.task;
        }

        try {
            const todo = yield fetchTodo();
            this.addTodo(todo);
        } catch (error) {
            console.log(`error: ${error}`)
        }
    }
}

export const observableTodoStore = new ObservableTodoStore();