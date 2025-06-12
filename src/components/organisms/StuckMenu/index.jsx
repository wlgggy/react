// StuckMenu
import React from "react";
import { HeaderContainer, Menu, Title, Nav } from "./styled";

function Header() {
  return (
    <div
      className="row"
      style={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <Date value={board.date} />
      <button type="button" onClick={handleEditToggle} style={{ display: isEditing ? "none" : "flex" }}>수정</button>
      {
        isEditing && (
          <div>
            <button type="submit" onClick={handleSubmit}>저장</button>
            <button type="button" onClick={handleDelete}>삭제</button>
          </div>
        )
      }
    </div>
  );
}

export default Header;
