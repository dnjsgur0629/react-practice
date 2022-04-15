import {useQuery} from 'react-query';
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse, TVDetail} from "../../../types";
import {airingTodayApi} from "../../../apis/tvApi";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTodayMovie', airingTodayApi);
}

export default useAiringTodayTv;