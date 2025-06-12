// Button
import React from "react";
import { LinkButtonStyle } from "./styled";
import { Link } from "react-router-dom";

function Button({ ButtonName, onClick = () => { }, ...args }) {
  return (

    <LinkButtonStyle {...args} onClick={onClick} >{ButtonName}</LinkButtonStyle>

  );
}
export default Button;
