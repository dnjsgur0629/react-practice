import {atom, selector} from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: [],
});

const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
uyㅛ
export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {ㅊㅇ
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':      //완료된 리스트만
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':    //완료하지 않은 리스트만
                return list.filter((item) => !item.isComplete);
            default:    //default(show All)면 리스트 전부 보여줌
                return list;
        }
    },
});

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;   //리스트의 총 길이를 보고
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;    //완료된 리스트의 길이를 보고
        const totalUncompletedNum = totalNum - totalCompletedNum;   //완료되지 않은 리스트의 길이를 보고
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum; //리스트가 없으면 0, 있으면 완료된 비율

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };  //통계(stats)를 return
    },
});