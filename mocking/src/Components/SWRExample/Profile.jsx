import React from 'react'
import axios from 'axios'
import useSWR from "swr";

//arguments를 전달받고 axios로 원하는 response가 왔을 때 response의 data를 return
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
    const {data, error} = useSWR(`/api/user/${id}`, fetcher, {refreshInterval: 1000})

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

//실제로 그려지는 component 반환
export default function Page() {
    //Profile에서는 parameter로 123을 Avatar에서는 124를 올려줌
    return (
        <div>
            <Profile id={123}/>
            <Avatar id={124}/>
        </div>
    )
}

//id를 props로 받아서 재사용성 있게 만든 Profile component
function Profile({id}) {
    const {user, isLoading, isError} = useUser(id)

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    //Profile에서 호출한 결과와 Avatar를 사용해서 가져온 결과 2개를 그려줌
    return <>
        <div>hello {user.name}!</div>
        <Avatar id={123}/>
    </>
}

//id를 props로 받아서 재사용성 있게 만든 Avatar component
export function Avatar({id}) {
    const {user, isLoading, isError} = useUser(id)

    if (isError) return <div>failed to load (Avatar)</div>
    if (isLoading) return <div>loading... (Avatar)</div>
    return <div>hello {user.name}! (Avatar)</div>
}