import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
`;
export const ButtonStyle = styled.button`
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 50vw;
  padding: 10px;
  font-size: 1rem;
  resize: vertical;
`;
