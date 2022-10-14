import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 60px;
`;

function Main() {
  return <Wrapper>Main</Wrapper>;
}

export default React.memo(Main);
