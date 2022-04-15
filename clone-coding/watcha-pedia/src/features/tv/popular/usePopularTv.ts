import {useQuery} from 'react-query';
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse, TVDetail} from "../../../types";
import {popularApi} from "../../../apis/tvApi";

const usePopularTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('popularTv', popularApi);
}

export default usePopularTv;