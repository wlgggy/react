import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {
    const [result, setResult] = useState([]); // 초기값은 배열로 설정

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/board");
                setResult(response.data); // 데이터 상태에 저장
            } catch (error) {
                console.error("데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchData(); // 함수 호출
    }, []);

    return (
        <div>
            <h1>게시판 목록</h1>
            {result.length > 0 ? (
                result.map((item, index) => (
                    <div key={index}>
                        <Link to='/sub'>
                        <span style={{ width: '200px', display: 'inline-block' }}>{item.title}</span></Link>
                        <span style={{ width: '100px', display: 'inline-block' }}></span>
                        <span style={{ width: '500px', display: 'inline-block', textAlign: 'left' }}>{item.content}</span>
                    </div>
                ))
            ) : (
                <p>불러올 데이터가 없습니다.</p>
            )}
        </div>
    );
}

export default Main;
