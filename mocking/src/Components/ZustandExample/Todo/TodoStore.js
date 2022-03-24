import create from "zustand";
import {devtools} from "zustand/middleware";

//Recoil에서 atom으로 생성한 state를 useStore로 전부 대체
export const useStore = create(devtools((set, get) => ({ //get 추가
    todoListState: [],
    setTodoListState: (list) => set({todoListState: list}), //state는 따로 setter 추가
    todoListFilterState: 'Show All',
    setTodoListFilterState: (filter) => set({todoListFilterState: filter}),
    filteredTodoListState: () => {  //selector는 함수 형태로 추가
        const filter = get().todoListFilterState;   //get 사용방법
        const list = get().todoListState;

        switch (filter) {
            case 'Show Completed':      //완료된 리스트만
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':    //완료하지 않은 리스트만
                return list.filter((item) => !item.isComplete);
            default:    //default(show All)면 리스트 전부 보여줌
                return list;
        }
    },
    todoListStatsState: () => {
        const todoList = get().todoListState;
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
})));