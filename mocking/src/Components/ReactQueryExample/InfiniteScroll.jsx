import React from 'react';
import {useInfiniteQuery} from "react-query";
import axios from "axios";

function InfiniteScroll() {
  const fetchProjects = ({ pageParam = 0 }) =>
      axios.get('/api/projects?page=' + pageParam).then((res) => res.data);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('projects', fetchProjects, {   // InfiniteQuery로 무한스크롤 구현
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor, //마지막 page의 nextCursor를 가져옴
  })

  return status === 'loading' ? (
      <p>Loading...</p>
  ) : status === 'error' ? (
      <p>Error: {error.message}</p>
  ) : (
      <>
        {data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.projects.map(project => (
                  <p key={project.id}>{project.name}</p>
              ))}
            </React.Fragment>
        ))}
        <div>
          <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                    ? 'Load More'
                    : 'Nothing more to load'}
          </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
      </>
  );
}

export default InfiniteScroll;