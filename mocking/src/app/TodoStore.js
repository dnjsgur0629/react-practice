class TodoStore {
    todos = [];

    get completedTodosCount() {     /*완료된 todo 갯수*/
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    report() {
        if (this.todos.length === 0)
            return "<none>";
        const nextTodo = this.todos.find(todo => todo.completed === false);     //완료되지 않은 todo가 있다면 nextTodo로
        return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {     //task로 todo를 만들어서 push
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}

export const todoStore = new TodoStore();