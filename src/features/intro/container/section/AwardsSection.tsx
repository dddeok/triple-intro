import React from 'react';
import styled from 'styled-components';

import AwardItem from '@features/intro/component/item/AwradItem';
import { fadeIn } from '@common/styles/animation';

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
  return (
    <AwardContainer>
      {awardMap.map((award) => {
        const { id, image, text, alt } = award;
        return <AwardItem key={id} image={image} text={text} alt={alt} />;
      })}
    </AwardContainer>
  );
};

export default AwardsSection;

const AwardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  animation-delay: 0.3s;
  ${fadeIn};
`;
