import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sub() {
    const [result, setResult] = useState(null); // 하나의 객체만 저장

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/board");
                if (response.data.length > 0) {
                    setResult(response.data[0]); // 첫 번째 항목만 저장
                }
            } catch (error) {
                console.error("데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>글 수정</h1>
            {result ? (
                <div>
                    <span style={{ width: '200px', display: 'inline-block' }}>title : {result.title}</span>
                    <span style={{ width: '100px', display: 'inline-block' }}></span>
                    <span style={{ width: '500px', display: 'inline-block', textAlign: 'left' }}>content : {result.content}</span>
                </div>
            ) : (
                <p>불러올 데이터가 없습니다.</p>
            )}
        </div>
    );
}

export default Sub;
