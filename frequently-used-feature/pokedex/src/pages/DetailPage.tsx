//포켓몬 아이디를 전달받아서 선택한 포켓몬의 상세정보
import React from 'react';
import { useParams } from 'react-router-dom';

type Params = {
  id: string;
}

const DetailPage: React.FC = () => {
  const {id} = useParams<Params>();

  return (
      <div>Detail Page id: {id}</div>
  )
}

export default DetailPage;