// SideMenu
import React from "react";
import Category from "../../atoms/Category";
import { CategoryContainer } from "./styled";

function SideMenu() {
  return (
    <>
      <CategoryContainer>
        <Category title="DESIGN" />
        <Category title="SOFTWARE DEVELOPMENT" />
        <Category title="WEB DEVELOPMENT" />
        <Category title="APP DEVELOPMENT" />
        <Category title="DEVELOPMENT" />
        <Category title="+ ADD CATEGORY" />
      </CategoryContainer>
    </>
  );
}

export default SideMenu;
