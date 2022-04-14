import axios, {AxiosResponse} from 'axios';
import {useQuery, useQueries} from 'react-query';
import {UseQueryResult} from "react-query/types/react/types";

import {PokemonResponse} from '../types';

//id로 pokemon을 가져옴
const pokemonApi = (id?: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ''}`, {params: {limit: 151}});

export const usePokemon = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> =>
    useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id)); //id가 있으면 키 값으로 사용


//두개의 포켓몬을 배열로 가져옴
export const usePokemonQueries = (names: string[]): Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>> => {
  const queries = names.map((name, idx) => ({
    queryKey: ['evolution', `${name}_${idx}`],
    queryFn: () => pokemonApi(name)
  }))

  return useQueries(queries) as Array<UseQueryResult<AxiosResponse<PokemonResponse>, Error>>;
}