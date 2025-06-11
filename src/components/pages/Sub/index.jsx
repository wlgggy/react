import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBoard() {
    const { no } = useParams();
    const navigate = useNavigate();

    const [board, setBoard] = useState({ title: "", content: "" });
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBoard = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/board/${no}`);
                setBoard(response.data);
            } catch (err) {
                setError("게시글을 불러오는 데 실패했어요 😥");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchBoard();
    }, [no]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoard((prev) => ({ ...prev, [name]: value }));
    };

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
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("수정하는 데 문제가 생겼어요. 다시 시도해 주세요.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <p>로딩 중입니다... 잠깐만요! ⏳</p>;

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>게시글 수정하기</h2>
            {error && (
                <p style={{ color: "red", marginBottom: "15px" }}>
                    ⚠️ {error}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>
                        제목: <br />
                        <input
                            type="text"
                            name="title"
                            value={board.title}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "10px", fontSize: "1rem" }}
                            disabled={submitting}
                            autoFocus
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>
                        내용: <br />
                        <textarea
                            name="content"
                            value={board.content}
                            onChange={handleChange}
                            rows={10}
                            style={{ width: "100%", padding: "10px", fontSize: "1rem", resize: "vertical" }}
                            disabled={submitting}
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "12px 30px",
                        fontSize: "1rem",
                        backgroundColor: submitting ? "#999" : "#4caf50",
                        color: "white",
                        border: "none",
                        cursor: submitting ? "not-allowed" : "pointer",
                        borderRadius: "4px",
                        transition: "background-color 0.3s",
                    }}
                    disabled={submitting}
                >
                    {submitting ? "수정 중..." : "수정 완료"}
                </button>
            </form>
        </div>
    );
}

export default EditBoard;
