// Content
import React from "react";
import styled from "styled-components";
import { ContentTextArea } from "./styled";

function Content({ name, value, onChange, disabled }) {
  return (
    <>
      <div>
        <label>
          <ContentTextArea
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder="내용을 입력하세요"
            rows={10}
          /></label>
      </div>
    </>
  );
}

export default Content;
