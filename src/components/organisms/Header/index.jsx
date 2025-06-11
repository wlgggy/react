// Header.jsx
import React from "react";
import { HeaderContainer, Menu, Title, Nav } from "./styled";

function Header() {
  return (
    <HeaderContainer>
      <Menu>
        <Title>J O U R N A L</Title>
        <Nav>
          <p>About</p>
          <p>Log In</p>
          <p>Sign In</p>
        </Nav>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
