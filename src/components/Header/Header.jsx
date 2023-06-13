import React from 'react';
import { HeaderBlock, HeaderWrapper } from './Header.styled';
import { NavLink } from 'react-router-dom';
// import { Container } from 'components/App.styled';

const Header = () => {
  return (
    <HeaderBlock>
      {/* <span>Navbar</span> */}
      <HeaderWrapper>
        <NavLink aria-current="page" to="/">
          Home
        </NavLink>

        <NavLink to="/movies">Movies</NavLink>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
