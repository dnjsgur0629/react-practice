import {useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";

export default function Pagination() {
    const [page, setPage] = useState(0)

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
        ['projects', page],
        () => fetchProjects(page),
        // {keepPreviousData: true}
    )

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) :
                (
                <div>
                    {data.projects.map(project => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </div>
            )}
            <span>Current Page: {page + 1}</span> {/*page가 0일 때 1로 표시*/}
            {/*Previous Page버튼을 누르면 page에 -1을 합니다 (-로 가면 대신에 0으로) page가 0이면 disable됩니다.*/}
            <button
                onClick={() => setPage(old => Math.max(old - 1, 0))}
                disabled={page === 0}
            >
                Previous Page
            </button>
            {' '}
            {/*Next Page버튼은 반대로 page에 +1을하는데, data에 hasMore가 있을 때만 동작하게 합니다*/}
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