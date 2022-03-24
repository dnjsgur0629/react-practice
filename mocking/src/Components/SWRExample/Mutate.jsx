import React from 'react';
import useSWR, {useSWRConfig, SWRConfig} from "swr";
import axios from "axios";

function Mutate() {
    return (
        <SWRConfig>
            <Page1/>
            <Page2/>
        </SWRConfig>
    );
}

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Page1 = () => {
    const {data} = useSWR("/api/user/12345", fetcher);
    const {mutate} = useSWRConfig();

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>My name is {data.name}.</h1>
            <button onClick={async () => {
                const newName = data.name.toUpperCase();
                console.log(newName)

                // 로컬 데이터를 즉시 업데이트하지만, 갱신은 비활성화
                // 실제 데이터는 소문자지만 로컬 데이터는 대문자로 업데이트
                mutate('/api/user/12345', {...data, name: newName}, false);

                // 로컬 데이터가 올바른지 확인하기 위해 갱신(refetch) 트리거
                // 소문자인 실제 데이터를 다시 가져와서 갱신함
                mutate('/api/user/12345');
            }}>Uppercase my name!
            </button>
        </div>
    );
}

const Page2 = () => {
    const {data, mutate} = useSWR("/api/user/45", fetcher); //useSWR Hook에서 mutate 꺼내오기

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>My name is {data.name}.</h1>
            <button onClick={async () => {
                const newName = data.name.toUpperCase();
                console.log(newName)

                mutate({...data, name: newName}, false);    //key가 필요하지 않음
                mutate();
            }}>Uppercase my name!
            </button>
        </div>
    );
}
export default Mutate;