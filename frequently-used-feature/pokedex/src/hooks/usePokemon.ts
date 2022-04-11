import axios, {AxiosResponse} from 'axios';
import {useQuery} from 'react-query';
import {UseQueryResult} from 'react-query/types/react/types';

import {PokemonResponse} from '../types';

//id로 pokemon을 가져옴
const pokemonApi = (id?: string) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ''}`, {params: {limit: 151}});

const usePokemon = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> =>
    useQuery(id ? ['pokemon', id] : 'pokemon', () => pokemonApi(id)); //id가 있으면 키 값으로 사용

export default usePokemon;