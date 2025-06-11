// Header.jsx
import React from "react";
import { DateContainer, DateStyle } from "./styled";

function Date() {
  return (
    <DateContainer>
      < DateStyle
      >게시일</DateStyle>
      <DateStyle>수정일</DateStyle>
    </DateContainer>
  );
}

export default Date;
