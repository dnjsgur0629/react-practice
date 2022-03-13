import React from 'react'
import axios from 'axios'
import useSWR from "swr";

const fetcher = (...args) => {
  axios.get(...args).then((res) => res.data);
}

function Profile() {
  const {data, error} = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

export default Profile;