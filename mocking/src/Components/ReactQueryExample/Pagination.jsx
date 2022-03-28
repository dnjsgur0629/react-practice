import React from 'react';
import {useQuery} from "react-query";
import axios from "axios";

function Pagination() {
        const [page, setPage] = React.useState(0)
        //axios로 fetcher 생성
        const fetchProjects = (page = 0) =>
            axios.get('/api/projects?page=' + page).then((res) => res.data)

        const {
            isLoading,
            isError,
            error,
            data,
            isFetching,
            isPreviousData,
        } = useQuery(
            ['projects', page], // Query의 key로 같이 넘어가는 page
            () => fetchProjects(page),
            { keepPreviousData : true }  // 먼저 keepPreviousData를 사용하지 않은 상태에서 무슨 일이 일어나는지 확인
        )

        return (
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isError ? (
                    <div>Error: {error.message}</div>
                ) : (
                    <div>
                        {data.projects.map(project => (
                            <p key={project.id}>{project.name}</p>
                        ))}
                    </div>
                )}
                <span>Current Page: {page + 1}</span> {/*page에 원래 값에 1을 더해서 출력(0일 때 1)*/}
                {/*Previous 버튼 누르면 page에 -1을 해주는데, 이미 0이면 0으로한다.
                page가 0이면 버튼을 비활성화시킨다*/}
                <button
                    onClick={() => setPage(old => Math.max(old - 1, 0))}
                    disabled={page === 0}
                >
                    Previous Page
                </button>{' '}
                {/*반대로 Next 버튼을 누르면 page에 1을 증가시킨다
                hasMore가 true일 때만 증가 시켜준다.*/}
                <button
                    onClick={() => {
                        if (!isPreviousData && data.hasMore) {
                            setPage(old => old + 1)
                        }
                    }}
                    // Disable the Next Page button until we know a next page is available
                    disabled={isPreviousData || !data?.hasMore}
                >
                    Next Page
                </button>
                {isFetching ? <span> Loading...</span> : null}{' '}
            </div>
        )
}

export default Pagination;