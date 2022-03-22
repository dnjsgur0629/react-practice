import {atom, selector, selectorFamily, useRecoilState, useRecoilValue} from "recoil";
import React from 'react';
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

//Component와 같은 파일에서 store 사용
const currentUserIDState = atom({
    key: 'CurrentUserID', default: 1,
});

const currentUserNameQuery = selectorFamily({
    key: 'CurrentUserName',
    get: id => async () => {
        const response = await axios.get(`/api/user-name?id=${id}`);   //axios로 api호출
        return response.data.name;
    },
});

// input에 넣는 id에 따라 다른 userName을 보여주도록 함
function CurrentUser() {
    const userName = useRecoilValue(currentUserNameQuery(1));
    return <div>{userName}</div>;
}

export default function CurrentUserInfo() {
    return (<ErrorBoundary> {/*ErrorBoundary로 감싸서 Error가 발생할 때를 대비*/}
        <React.Suspense
            fallback={<div>Loading...</div>}> {/*React.Suspense로 감싸서 데이터가 넘어오지 않았을 때 fallback을 그려주도록 함*/}
            <CurrentUser/>
        </React.Suspense>
    </ErrorBoundary>)
}
