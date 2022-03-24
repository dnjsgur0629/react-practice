import {useStore} from "./TodoStore";

export default function TodoListFilters() {
    const [filter, setFilter] = useStore((state) => [
        state.todoListFilterState,
        state.setTodoListFilterState
    ]);

    const updateFilter = ({target: {value}}) => {
        setFilter(value);
    };

    //필터링 옵션 선택
    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}