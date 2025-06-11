import React from "react";
import styled from "styled-components";
import { TitleInput } from "./styled";

function Title({ name, value, onChange, disabled }) {
  return (
    <>
      <div>
        <label><TitleInput
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder="제목을 입력하세요"
        /></label>
      </div>
    </>
  );
}

export default Title;
