import React from 'react';
import styled from 'styled-components';
import { useCountUp } from 'react-countup';

interface Props {
  countType: string;
  count: number;
  description: string;
}
const MetricItem = ({ count, countType, description }: Props) => {
  const { countUp } = useCountUp({ end: count });
  return (
    <Container>
      <strong>{`${countUp}${countType}`}</strong>의 {description}
    </Container>
  );
};

export default MetricItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  font-size: 36px;
  color: #3a3a3a;
`;
