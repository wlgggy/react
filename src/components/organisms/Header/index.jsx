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
          <p>Login</p>
          <p>SignIn</p>
        </Nav>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
