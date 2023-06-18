import React from 'react';
import { HeaderBlock, HeaderWrapper, NavLinkStyled } from './Header.styled';
// import { NavLink } from 'react-router-dom';
// import { Container } from 'components/App.styled';

const Header = () => {
  return (
    <HeaderBlock>
      {/* <span>Navbar</span> */}
      <HeaderWrapper>
        <NavLinkStyled aria-current="page" to="/">
          Home
        </NavLinkStyled>

        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
