import React from 'react';
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail} from "../../types";
import {detailApi} from "../../apis/tvApi";

const useTvDetail = (query: string) => {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>(
      ['detailTv', query],
      () => detailApi(query),
      {enabled: Boolean(query)} //query가 있을 때만 동작
  );
}

export default useTvDetail;