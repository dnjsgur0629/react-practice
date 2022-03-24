import React from 'react';
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getTodos, postTodo} from "./myApi";
import GlobalLoader from "./GlobalLoader";  //fetcher 꺼내서 갖다 쓰기

function QuickStart() {
    const queryClient = useQueryClient();  //Provider에서 queryClient 받아오기

    const query = useQuery("todos", getTodos);  //useSWR과 비슷한 사용방법

    const mutation = useMutation(postTodo, {
        // 요청이 성공하면 todos의 query를 invalidate한다 (re-fetch해온다.)
        onSuccess: () => {
            queryClient.invalidateQueries("todos");
        },
    });

    if (query.isLoading) {
        return "Lodaing...";
    }
    if (query.error) {
        return "Error!";
    }

    return (
        <div>
            <GlobalLoader/>
            <ul>
                {query.data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <button onClick={() => {
                mutation.mutate({
                        id: Date.now(),
                        title: "new todo",
                    }
                )
            }
            }>Add Todo
            </button>
        </div>
    );
}

export default QuickStart;