import React, { useRef } from 'react';
import styled from 'styled-components';

import ImageSection from '@features/intro/container/section/ImageSection';
import MetricSection from '@features/intro/container/section/MetricSection';
import AwardsSection from '@features/intro/container/section/AwardsSection';

import useScrollFadeIn from '@features/intro/hook/useScrollFadeIn.hook';

const MainSection = () => {
  const ref = useRef(null);

  return (
    <MainContainer ref={ref}>
      <ContentContainer>
        <ImageSection />
        <ContentSection>
          <MetricSection />
          <AwardsSection />
        </ContentSection>
      </ContentContainer>
    </MainContainer>
  );
};

export default MainSection;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 560px;
  padding: 0 80px;
`;

const ContentContainer = styled.div`
  display: flex;
  padding-top: 150px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;
`;
