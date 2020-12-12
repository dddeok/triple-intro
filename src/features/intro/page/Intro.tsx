import React from 'react';
import styled from 'styled-components';

import Header from '@features/intro/container/header/Header';
import MainSection from '@features/intro/container/section/MainSection';

const Intro = () => {
  return (
    <IntroContainer>
      <Header />
      <Dumy />
      <MainSection />
      <Dumy />
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

const Dumy = styled.div`
  width: 100%;
  height: 780px;
`;
