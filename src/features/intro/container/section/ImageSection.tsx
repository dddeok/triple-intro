import React from 'react';
import styled from 'styled-components';

import useScrollFadeIn from '@features/intro/hook/useScrollFadeIn.hook';

const ImageSection = () => {
  const { ref, style, isIntersecting } = useScrollFadeIn(0.7, 0.1);
  return (
    <ImageContainer ref={ref} style={style}>
      {isIntersecting ? (
        <>
          <MainImage src="/assets/triple@2x.png" alt="Triple Image" />
          <ImageCation>2019년 2월 기준</ImageCation>
        </>
      ) : null}
    </ImageContainer>
  );
};

export default ImageSection;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
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
