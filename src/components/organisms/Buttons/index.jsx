// Header.jsx
import React from "react";
import { ButtonContainer, ButtonStyle } from "./styled";

// src/components/organisms/Buttons.jsx
function Buttons({ isEditing, onEditToggle, onSubmit, onDelete, submitting }) {
  return (
    <div>
      {!isEditing ? (
        <button type="button" onClick={onEditToggle} disabled={submitting}>
          수정
        </button>
      ) : (
        <>
          <button type="submit" disabled={submitting}>
            저장
          </button>
          <button type="button" onClick={onDelete} disabled={submitting}>
            삭제
          </button>
        </>
      )}
    </div>
  );
}

export default Buttons;
