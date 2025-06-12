// Categoty
import React from "react";
import { CategoryStyle, CategoryButtonStyle } from "./styled";

const Category = ({ title }) => {
  return (
    <>
      <CategoryStyle>
        <CategoryButtonStyle>{title}</CategoryButtonStyle></CategoryStyle>
    </>
  );
};

export default Category;
