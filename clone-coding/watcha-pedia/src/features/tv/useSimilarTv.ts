import React from 'react';
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse, TVDetail} from "../../types";
import {similarApi} from "../../apis/tvApi";

const useSimilarTv = (id: string | undefined) => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
      ['similarTv', id],
      () => similarApi(id) //query가 있을 때만 동작
  );
}

export default useSimilarTv;