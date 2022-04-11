//포켓몬 아이디를 전달받아서 선택한 포켓몬의 상세정보
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Tabs from "../components/Tabs";
import PokemonInfo from "../components/PokemonInfo";
import tabs from "../components/Tabs";

type Params = {
  id: string;
}

type Tab = 'about' | 'stats' | 'evolution';

const DetailPage: React.FC = () => {
  const {id} = useParams<Params>();
  const [selectedTab, setSelectedTab] = useState<Tab>('about');

  // 탭 선택
  const handleClick = (tab: Tab) => {
    setSelectedTab(tab);
  }

  return (
      <div>
        {/*<PokemonInfo/>*/}
        <Tabs tab={selectedTab} onClick={handleClick} color={{name: "green", url: ""}}/>
      </div>
  )
}

export default DetailPage;