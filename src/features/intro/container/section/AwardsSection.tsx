import React from 'react';
import styled from 'styled-components';

import AwardItem from '@features/intro/component/item/AwradItem';
import useScrollFadeIn from '@features/intro/hook/useScrollFadeIn.hook';

const awardMap = [
  {
    id: 'google',
    image: '/assets/play-store@2x.png',
    text: `2018 구글 플레이스토어
    올해의 앱 최우수상`,
    alt: '플레이 스토어',
  },
  {
    id: 'apple',
    image: '/assets/app-store@2x.png',
    text: `2018 애플 앱스토어
    오늘의 여행자앱 선정`,
    alt: '애플 스토어',
  },
];

const AwardsSection = () => {
  const { ref, style, isInterSection } = useScrollFadeIn(0.7, 0.3);
  return (
    <AwardContainer ref={ref} style={style}>
      {awardMap.map((award) => {
        const { id, image, text, alt } = award;
        return isInterSection ? (
          <AwardItem key={id} image={image} text={text} alt={alt} />
        ) : null;
      })}
    </AwardContainer>
  );
};

export default AwardsSection;

const AwardContainer = styled.div`
  display: flex;
  align-items: center;
`;
