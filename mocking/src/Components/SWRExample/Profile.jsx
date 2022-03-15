import React from 'react'
import axios from 'axios'
import useSWR from "swr";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
    const {data, error} = useSWR(`/api/user/${id}`, fetcher, {refreshInterval: 1000})

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

function Page() {
    return (
        <div>
            <Profile id={123}/>
            <Avater id={123}/>
        </div>
    )
}

function Profile({id}) {
    const {user, isLoading, isError} = useUser(id)

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <>
        <div>hello {user.name}!</div>
        <Avater id={123}/>
    </>
}

function Avater({id}) {
    const {user, isLoading, isError} = useUser(id)

    if (isError) return <div>failed to load (Avatar)</div>
    if (isLoading) return <div>loading... (Avatar)</div>
    return <div>hello {user.name}! (Avatar)</div>
}

export default Page;