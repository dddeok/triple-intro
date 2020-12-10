import React from 'react';
import styled from 'styled-components';

import { Link } from '@features/intro/component/link/Link';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <strong>Triple</strong>
      </Logo>
      <LinkContainer>
        <LinkText>Triple Team</LinkText>
        <LinkText>Contact</LinkText>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  max-height: 80px;
  border: 1px solid rgb(239, 239, 239);
  padding: 0 50px;
  background: #fff;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Logo = styled(Link)`
  font-size: 22px;
  color: #212121;
`;

const LinkText = styled(Link)`
  margin-left: 34px;
  color: rgba(58, 58, 58, 0.8);
  height: 80px;
  line-height: 80px;
`;
