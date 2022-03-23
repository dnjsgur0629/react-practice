import React from 'react';
import useSWR, {SWRConfig } from "swr";
import axios from "axios";
import {retry} from "@reduxjs/toolkit/query";

function Fetcher() {
  return (
      <SWRConfig
      value = {{  //전역에서 fetcher내려주기
        fetcher: (...args) => axios.get(...args).then((res) => res.data),
      }}>
        <Page />
      </SWRConfig>
  );
}

const Page = () =>{
  const {data, error} = useSWR('/api/user/777', {onErrorRetry: (error, key, config, revalidate, {retryCount}) => {  //에러 재시도 커스텀
    if(error.status === 404){ //404에러면 alert 띄우고 멈춤
      alert(404);
      return;
    }
    if(retryCount > 3){ //3번 재시도 했으면 멈춤
      return;
    }
    setTimeout(()=>revalidate({retryCount}), 200);  //200ms마다 revalidate
    },
  });

  if(error){
    return <div>Error!</div>
  }

  if(!data){
    return <div>Loading...</div>
  }

  return <div>{data.name}</div>

}

export default Fetcher;