import LeftSideBar from 'components/LeftSideBar';
import RightSideBar from 'components/RightSideBar';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 60px;
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  min-width: 520px;
  width: 100%;
  height: 100%;
`;

function Main() {
  return (
    <Wrapper>
      <LeftSideBar />
      <Container>main</Container>
      <RightSideBar />
    </Wrapper>
  );
}

export default React.memo(Main);
