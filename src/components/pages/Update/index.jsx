import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../organisms/Header";
import Content from "../../atoms/Content";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";

function UpdateBoard() {
  const { no } = useParams();
  const navigate = useNavigate();

  const [board, setBoard] = useState({ title: "", content: "", createDate: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/board/${no}`);
        setBoard(data);
      } catch {
        setError("게시글을 불러오는 데 실패했어요 😥");
      } finally {
        setLoading(false);
      }
    };
    fetchBoard();
  }, [no]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => setIsEditing(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!board.title.trim() || !board.content.trim()) {
      alert("제목과 내용을 꼭 입력해 주세요!");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await axios.put(`http://localhost:8080/board/${no}`, board);
      alert("게시글 수정 완료! 💾");
      setIsEditing(false);
      navigate("/main");
    } catch {
      setError("수정하는 데 문제가 생겼어요. 다시 시도해 주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠어요? ❗️")) return;
    try {
      await axios.delete(`http://localhost:8080/board/${no}`);
      alert("게시글이 삭제되었어요 🗑️");
      navigate("/main");
    } catch {
      alert("삭제하는 중 오류가 발생했어요 😢");
    }
  };

  if (loading) return <p>로딩 중입니다... 잠깐만요! ⏳</p>;

  return (
    <div className="Container">
      <Header />
      <div className="FormContainer">
        <form>
          <Title
            name="title"
            value={board.title}
            onChange={handleChange}
            disabled={!isEditing || submitting}
          />
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <div style={{ padding: "0 0 0 10px" }}>{board.createDate}</div>
            <Button type="button" onClick={handleEditToggle} style={{ display: isEditing ? "none" : "flex" }} ButtonName="수정" />
            {
              isEditing && (
                <div style={{ display: "flex", gap: "10px" }}>
                  <Button type="submit" onClick={handleSubmit} ButtonName="저장" />
                  <Button type="submit" onClick={handleDelete} ButtonName="삭제" />
                </div>
              )
            }
          </div>
          <Content
            name="content"
            value={board.content}
            onChange={handleChange}
            disabled={!isEditing || submitting}
          />
        </form>
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      </div>
    </div>
  );
}

export default UpdateBoard;
