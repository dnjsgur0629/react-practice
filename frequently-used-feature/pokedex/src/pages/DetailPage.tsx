//포켓몬 아이디를 전달받아서 선택한 포켓몬의 상세정보
import React, {useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from '@emotion/styled/macro';

import PokemonInfo from '../components/PokemonInfo';
import Tabs from '../components/Tabs';
import About from '../components/About';
import Stats from '../components/Stats';
import Evolution from '../components/Evolution';

import {PokemonResponse} from '../types';
import usePokemon from '../hooks/usePokemon';
import useSpeciesQuery from '../hooks/useSpecies';

type Params = {
  id: string;
}

type Tab = 'about' | 'stats' | 'evolution';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  margin: 24px auto 0;
`;

const DetailPage: React.FC = () => {
  const {id} = useParams<Params>();

  const [selectedTab, setSelectedTab] = useState<Tab>('about');

  const pokemonResult = usePokemon<PokemonResponse>(id);
  const speciesQueryResult = useSpeciesQuery(id);

  //포켓몬의 정보
  const {
    name,
    types,
    height,
    weight,
    abilities,
    baseExp,
    stats
  } = useMemo(() => ({
    name: pokemonResult.data?.data.name,
    types: pokemonResult.data?.data.types,
    height: pokemonResult.data?.data.height,
    weight: pokemonResult.data?.data.weight,
    abilities: pokemonResult.data?.data.abilities,
    baseExp: pokemonResult.data?.data.base_experience,
    stats: pokemonResult.data?.data.stats,
  }), [pokemonResult]);

  //useMemo로 포켓몬 종의 정보를 가져옴
  const {
    color,
    growthRate,
    flavorText,
    genderRate,
    isLegendary,
    isMythical,
    evolutionChainUrl,
  } = useMemo(() => ({
    color: speciesQueryResult.data?.data.color,
    growthRate: speciesQueryResult.data?.data.growth_rate.name,
    flavorText: speciesQueryResult.data?.data.flavor_text_entries[0].flavor_text,
    genderRate: speciesQueryResult.data?.data.gender_rate,
    isLegendary: speciesQueryResult.data?.data.is_legendary,
    isMythical: speciesQueryResult.data?.data.is_mythical,
    evolutionChainUrl: speciesQueryResult.data?.data.evolution_chain.url,
  }), [speciesQueryResult]);

  const handleTabClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
      <Container>
        <PokemonInfo
            // @ts-ignore
            id={id}
            name={name}
            types={types}
            color={color}
        />
        <TabsWrapper>
          <Tabs
              color={color}
              tab={selectedTab}
              onClick={handleTabClick}
          />
        </TabsWrapper>
        {
            selectedTab === 'about' && (
                <About
                    isLoading={speciesQueryResult.isLoading || pokemonResult.isLoading}
                    color={color}
                    genderRate={genderRate}
                    isLegendary={isLegendary}
                    isMythical={isMythical}
                    types={types}
                    weight={weight}
                    height={height}
                    baseExp={baseExp}
                    abilities={abilities}
                />
            )
        }
        {
            selectedTab === 'stats' && (
                <Stats
                    isLoading={speciesQueryResult.isLoading || pokemonResult.isLoading}
                    color={color}
                    stats={stats}
                />
            )
        }
        {
            selectedTab === 'evolution' && (
                <Evolution
                    id={id}
                    isLoading={speciesQueryResult.isLoading || pokemonResult.isLoading}
                    color={color}
                    url={evolutionChainUrl}
                />
            )
        }
      </Container>
  )
}

export default DetailPage;