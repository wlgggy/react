// Header
import React from "react";
import { HeaderContainer, Menu, Title, Nav } from "./styled";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Menu>
        <Link to={`/main`}>
          <Title>J O U R N A L</Title>
        </Link>
        <Nav>
          <div><button>About</button></div>
          <div><button>Log In</button></div>
          <div><button>Sign In</button></div>
        </Nav>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
