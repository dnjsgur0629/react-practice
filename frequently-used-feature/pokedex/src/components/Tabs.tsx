import React from 'react';
import styled from '@emotion/styled/macro';

import { Color } from '../types';
import { mapColorToHex } from '../utils';

type Props = {
  tab: 'about' | 'stats' | 'evolution';
  onClick: (tab: 'about' | 'stats' | 'evolution') => void;
  color?: Color;
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  & + & {
    margin-left: 16px;
  }
`;

// active 상태를 prop으로 전달받아서 active상태일 때 색에 변화를 줄 수 있도록 함
const TabButton = styled.button<{ active?: boolean; color: string; }>`
  margin: 0;
  border-radius: 8px;
  box-shadow: 6px 4px 14px 5px rgba(0,0,0,0.21);
  padding: 6px 12px;
  background-color: #fff;
  border: none;
  font-size: 16px;
  color: ${({ active, color }) => active ? color : '#6B7280'};
`;

const Tabs: React.FC<Props> = ({ tab, onClick, color }) => (
    <List>
      <ListItem onClick={() => onClick('about')}> {/*클릭되었을 때 뭐가 클릭됐는지 알려주고 상위 컴포넌트에서 처리*/}
        <TabButton active={tab === 'about'} color={mapColorToHex(color?.name)}>About</TabButton> {/*탭이 선택됐을 때 변화주기*/}
      </ListItem>
      <ListItem onClick={() => onClick('stats')}>
        <TabButton active={tab === 'stats'} color={mapColorToHex(color?.name)}>Stats</TabButton>
      </ListItem>
      <ListItem onClick={() => onClick('evolution')}>
        <TabButton active={tab === 'evolution'} color={mapColorToHex(color?.name)}>Evolution</TabButton>
      </ListItem>
    </List>
)

export default Tabs;