import React from 'react';
import styled from 'styled-components';

import MetricItem from '@features/intro/component/item/MetricItem';
import useScrollFadeIn from '@features/intro/hook/useScrollFadeIn.hook';

const metriMap = [
  { type: 'user', count: 350, countType: '만 명', description: '사용자' },
  { type: 'review', count: 21, countType: '만 개', description: '리뷰' },
  { type: 'saving', count: 650, countType: '만 개', description: '사용자' },
];

const MetricSection = () => {
  const { ref, style, isIntersecting } = useScrollFadeIn(0.7, 0.2);

  return (
    <MetricContainer ref={ref} style={style}>
      {metriMap.map((metric) => {
        const { type, count, countType, description } = metric;
        return isIntersecting ? (
          <MetricItem
            key={type}
            count={count}
            countType={countType}
            description={description}
          />
        ) : null;
      })}
    </MetricContainer>
  );
};

export default MetricSection;

const MetricContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
`;
