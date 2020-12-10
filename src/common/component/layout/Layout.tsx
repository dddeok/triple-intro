import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  min-width: 1200px;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
