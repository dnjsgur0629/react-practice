import { atom, atomFamily, selectorFamily } from 'recoil';
import { filteredTodoListState } from '../TodoList/atom';

export const todoStatisticsModalOpenState = atom<boolean>({ //할 일 modal의 열림 유무
  key: 'todoStatisticsModalOpenState',
  default: false
});

export const todoStatisticsState = atomFamily<{ total: number, done: number }, Date>({  // 해당 날짜의 할 일 통계
  key: 'todoStatisticsState',
  default: selectorFamily({
    key: 'todoStatisticsState/default',
    get: (selectedDate) => ({ get }) => {
      const todoList = get(filteredTodoListState(selectedDate));

      return {
        total: todoList.length,
        done: todoList.filter(todo => todo.done).length || 0
      }
    }
  })
});
