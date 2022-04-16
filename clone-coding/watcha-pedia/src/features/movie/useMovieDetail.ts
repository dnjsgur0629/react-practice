import React from 'react';
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail} from "../../types";
import {detailApi} from "../../apis/movieApi";

const useMovieDetail = (query: string) => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
      ['detailMovie', query],
      () => detailApi(query),
      {enabled: Boolean(query)} //query가 있을 때만 동작
  );
}

export default useMovieDetail;