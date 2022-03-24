import React from 'react';
import {useQuery} from "react-query";

//git hub에서 react-query의 subscribers 수, star수 fork횟수를 보여주는 api
function Example() {
    const {isLoading, error, data} = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => //useQuery훅으로 fetcher호출
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    )

    return <div>Page</div>
}

export default Example;