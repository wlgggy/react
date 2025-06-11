import React from "react";
import Title from "./Title";
import Content from "./Content";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  margin: 2rem auto;
`;

function Form({ title, content, onTitleChange, onContentChange, onSubmit }) {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Title value={title} onChange={onTitleChange} />
      <Content value={content} onChange={onContentChange} />
      <button type="submit">제출</button>
    </FormContainer>
  );
}

export default Form;
