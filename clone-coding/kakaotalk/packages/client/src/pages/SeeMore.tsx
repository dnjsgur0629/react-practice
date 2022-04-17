import React from "react";
import styled from "@emotion/styled";

import TopNavigation from "../components/TopNavigation";
import BottomNavigation from "../components/BottomNavigation";
import UserInfo from "../components/SeeMore/UserInfo";
import IconButtonList from "../components/SeeMore/IconButtonList";

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SeeMore: React.FC = () => {

  return (
      <Base>
        <Container>
          <TopNavigation title="더보기" />
          <UserInfo username="" telNo=""/>
          <IconButtonList />
          <BottomNavigation />
        </Container>
      </Base>
  );
};

export default SeeMore;
