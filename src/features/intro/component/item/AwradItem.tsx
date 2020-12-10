import React from 'react';
import styled from 'styled-components';

interface Props {
  image: string;
  alt: string;
  text: string;
}
const AwardItem = ({ image, alt, text }: Props) => {
  return (
    <Container>
      <AwardImage src={image} alt={alt} />
      <AwardText>{text}</AwardText>
    </Container>
  );
};

export default AwardItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

const AwardImage = styled.img`
  width: 54px;
  height: 54px;
`;

const AwardText = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  color: rgba(58, 58, 58, 0.8);
  white-space: pre-line;
`;
