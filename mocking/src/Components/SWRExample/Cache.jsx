import React from 'react';
import {SWRConfig, useSWRConfig} from "swr";

function Cache() {
    return (
        <SWRConfig>
            <Page/>
        </SWRConfig>
    );
}

const Page = () => {
    const {cache, mutate} = useSWRConfig();
    return (<div>
        <button onClick={() => {
            mutate("/api/user/121212");
            console.log(`check : ${JSON.stringify(cache.get("/api/user/121212"))}`)
        }}>check
        </button>
    </div>)
}

export default Cache;