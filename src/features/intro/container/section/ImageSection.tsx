import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '@common/styles/animation';

const ImageSection = () => {
  return (
    <ImageContainer>
      <MainImage src="/assets/triple@2x.png" alt="Triple Image" />
      <ImageCation>2019년 2월 기준</ImageCation>
    </ImageContainer>
  );
};

export default ImageSection;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation-delay: 0.1s;
  animation-name: fadeIn;
  ${fadeIn};
`;

const ImageCation = styled.span`
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  text-align: center;
  position: relative;
  top: -60px;
`;

const MainImage = styled.img`
  width: 400px;
  height: 340px;
`;
