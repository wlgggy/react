// InfoCard.js
import React from "react";
import { CategoryStyle } from "./styled";

const Category = ({ title }) => {
  return (
    <>
      <CategoryStyle>{title}</CategoryStyle>
    </>
  );
};

export default Category;
