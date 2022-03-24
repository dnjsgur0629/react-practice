import useSWRInfinite from "swr/infinite"
import axios from "axios";

// 각 페이지의 SWR 키를 얻기 위한 함수,
// `fetcher`에 의해 허용된 값을 반환합니다.
// `null`이 반환된다면, 페이지의 요청은 시작되지 않습니다.
const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // 끝에 도달 했음
    return `/api/users?page=${pageIndex}&limit=5`                    // SWR 키
}

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Pagination() {
    const {data, size, setSize} = useSWRInfinite(getKey, fetcher)   //data는 배열형태로 받아와짐, size는 몇페이지까지 보여줄지
    if (!data) return 'loading'

    // 이제 모든 users의 수를 계산할 수 있습니다
    let totalUsers = 0
    for (let i = 0; i < data.length; i++) {
        totalUsers += data[i].length
    }

    return (
        <div>
            <p>{totalUsers} users listed</p>
            {data.map((users, index) => {
                // `data`는 각 페이지의 API 응답 배열입니다.
                return users.map(user => <div key={user.id}>{user.name}</div>)
            })}
            <button onClick={() => setSize(size + 1)}>Load More</button>
        </div>
    );
}