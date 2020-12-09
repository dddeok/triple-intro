import React from 'react';
import styled from 'styled-components';

import Header from '@features/intro/container/header/Header';
import AwardSection from '@features/intro/container/section/AwardSection';
const Intro = () => {
  return (
    <IntroContainer>
      <Header />
      <AwardSection />
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
