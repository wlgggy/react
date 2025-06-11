import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfoCard from "../../atoms/Widget/index";
import { MainContainer } from "../../atoms/Widget/styled";
import Category from "../../atoms/Category";
import Header from "../../organisms/Header";

function Main() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/board");
                setResult(response.data);
            } catch (error) {
                console.error("데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="Real">
            <Header/>
            <div className="yapyap">
                <div className="Container">
                    <div className="yap">
                        <Category title="DESIGN"/>
                        <Category title="SOFTWARE DEVELOPMENT"/>
                        <Category title="WEB DEVELOPMENT"/>
                        <Category title="APP DEVELOPMENT"/>
                        <Category title="DEVELOPMENT"/>
                    </div>
                    <MainContainer>
                        {result.length > 0 ? (
                            result.map((item) => (
                                <div key={item.no} style={{ marginBottom: '20px' }}>
                                    <Link to={`/sub/${item.no}`}>
                                        <InfoCard date={item.date} title={item.title} />
                                    </Link>

                                </div>
                            ))
                        ) : (
                            <p>불러올 데이터가 없습니다.</p>
                        )}
                    </MainContainer>
                </div></div>
        </div>
    );
}

export default Main;
