import {useQuery} from 'react-query';
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse, TVDetail} from "../../../types";
import {topRatedApi} from "../../../apis/tvApi";

const useTopRatedTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topRatedTv', topRatedApi);
}

export default useTopRatedTv;