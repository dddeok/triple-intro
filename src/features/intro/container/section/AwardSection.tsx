import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MetricItem from '@features/intro/component/item/MetricItem';
const AwardSection = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <Image src="/assets/triple@2x.png" width={400} height={338} />
        <ImageCation>2019년 2월 기준</ImageCation>
      </ImageContainer>
      <Temp>
        <MetricContainer>
          <MetricItem count={350} countType={'만 명'} description={'의 사용자'} />
          <MetricItem count={21} countType={'만 개'} description={'의 리뷰'} />
          <MetricItem count={650} countType={'만 개'} description={'의 저장'} />
        </MetricContainer>
        <AwardContainer>
          <Image src="/assets/play-store@2x.png" width={54} height={54} />
          <AwardDescription>{`2018 구글 플레이스토어
  올해의 앱 최우수상`}</AwardDescription>
          <Image src="/assets/app-store@2x.png" width={54} height={54} />
          <AwardDescription>{`2018 애플 앱스토어
          오늘의 여행자앱 선정`}</AwardDescription>
        </AwardContainer>
      </Temp>
    </SectionContainer>
  );
};

export default AwardSection;

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 560px;
  padding: 0 80px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;

  padding-top: 150px;
  animation-delay: 0.1s;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const ImageCation = styled.span`
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  text-align: center;
  position: relative;
  top: -60px;
`;

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
`;

const MetricContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  margin-left: 150px;
  opacity: 0;

  animation-delay: 0.2s;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const AwardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 150px;
  opacity: 0;

  animation-delay: 0.3s;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    66% {
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const AwardDescription = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  color: rgba(58, 58, 58, 0.8);
  white-space: pre-line;
`;
