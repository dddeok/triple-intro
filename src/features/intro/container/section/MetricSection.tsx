import React from 'react';
import styled from 'styled-components';

import MetricItem from '@features/intro/component/item/MetricItem';
import { fadeIn } from '@common/styles/animation';

const metriMap = [
  { type: 'user', count: 350, countType: '만 명', description: '의 사용자' },
  { type: 'review', count: 21, countType: '만 개', description: '의 리뷰' },
  { type: 'saving', count: 650, countType: '만 개', description: '의 사용자' },
];

const MetricSection = () => {
  return (
    <MetricContainer>
      {metriMap.map((metric) => {
        const { type, count, countType, description } = metric;
        return (
          <MetricItem
            key={type}
            count={count}
            countType={countType}
            description={description}
          />
        );
      })}
    </MetricContainer>
  );
};

export default MetricSection;

const MetricContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;

  animation-delay: 0.2s;

  margin-left: 20px;
  ${fadeIn};
`;
