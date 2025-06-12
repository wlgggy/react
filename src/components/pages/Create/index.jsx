// src/components/pages/EditBoard/index.jsx
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../organisms/Header";
import Content from "../../atoms/Content";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";

function CreateBoard() {
  const navigate = useNavigate();

  const [board, setBoard] = useState({ title: "", content: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setBoard(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!board.title.trim() || !board.content.trim()) {
      alert("제목과 내용을 꼭 입력해 주세요!");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post("http://localhost:8080/board", board);
      alert("게시글이 성공적으로 작성되었어요! 🎉");
      navigate("/main");
    } catch {
      setError("게시글 작성 중 문제가 발생했어요. 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="Container">
      <Header />
      <div className="FormContainer">
        <form onSubmit={handleSubmit}>
          <Title
            name="title"
            value={board.title}
            onChange={handleChange}
            disabled={submitting}
          />
          <div
            className="row"
            style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
          >
            <Button type="submit" disabled={submitting} ButtonName={submitting ? '작성 중...' : '저장 '} />
          </div>
          <Content
            name="content"
            value={board.content}
            onChange={handleChange}
            disabled={submitting}
          />
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default CreateBoard;
