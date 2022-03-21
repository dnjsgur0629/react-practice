import {observer} from "mobx-react";
import {action, runInAction} from "mobx";

const TodoView = observer(({todo}) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    };

    const onRename = () => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    };

    //todo list에 checkbox를 줘서 check되면 완료된 것으로 함, 넣어놓은 task를 더블 클릭하면 rename할 수 있음.
    return (
        <li onDoubleClick={onRename}>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggleCompleted}
            />
            {todo.task}
            {todo.assignee
                ? <small>{todo.assignee.name}</small>
                : null
            }
        </li>
    );
});

const TodoList = observer(({store}) => {    // store의 변화를 관찰하는 observer, store에 변화가 감지되면 라렌더
    const onNewTodo = () => {
        store.addTodo(prompt('Enter a new todo:', 'coffee plz'));   //todo를 add하는 창을 띄움
    };

    const run = () => {
        store.todos[0].completed = !store.todos[0].completed;   //첫번째는 complete
        store.todos[1].task = "Random todo " + Math.random();   //2번째에 random todo 추가
        store.todos.push({task: "Find a fine cheese", completed: true});    //맨뒤에 완료된 치즈찾기 추가
// etc etc.. add your own statements here...
    };

    const load = () => {
        runInAction(() => {
            store.pendingRequests++;
        });
        setTimeout(action(() => {
            store.addTodo('Random Todo ' + Math.random());
            store.pendingRequests--;
        }), 2000);
    };

    const fetchTodo = () => {
        store.fetchData();
    };

    return (
        <div>
            {store.report}
            <ul>
                {store.todos.map(
                    (todo, idx) => <TodoView todo={todo} key={idx}/>
                )}
            </ul>
            {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
            <button onClick={onNewTodo}>New Todo</button>
            <small> (double-click a todo to edit)</small>
            <button onClick={run}>mobx run</button>
            <button onClick={load}>load data</button>
            <button onClick={fetchTodo}>fetch data</button>
        </div>
    );
});

export default TodoList