/*
다음 통계를 표시

* todo 항목들의 총개수
* 완료된 todo 항목들의 총개수
* 완료되지 않은 todo 항목들의 총개수
* 완료된 항목의 백분율
*/

import React from 'react';
import {useRecoilValue} from "recoil";
import {todoListStatsState} from "./TodoStore";

function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);
    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompletedNum}</li>
            <li>Items not completed: {totalUncompletedNum}</li>
            <li>Percent completed: {formattedPercentCompleted}%</li>
        </ul>
    );
}

export default TodoListStats;
