import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfoCard from "../../atoms/Widget/index";
import { MainContainer } from "../../atoms/Widget/styled";
import Header from "../../organisms/Header";
import SideMenu from "../../organisms/SideMenu";
import LinkButton from "../../atoms/Button";

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
        <div className="Container">
            <Header />
            <div className="ContentContainer">
                <SideMenu />
                <Link to="/create"><LinkButton ButtonName="글 생성" style={{
                    position: "fixed",
                    bottom: "5vh",
                    right: "2vw"
                }} /></Link>
                <MainContainer>
                    {result.length > 0 ? (
                        result.map((item) => (
                            <div key={item.no} style={{ marginBottom: '20px' }}>
                                <Link to={`/update/${item.no}`}>
                                    <InfoCard date={item.createDate} title={item.title} />
                                </Link>

                            </div>
                        ))
                    ) : (
                        <p>불러올 데이터가 없습니다.</p>
                    )}
                </MainContainer>
            </div>
        </div>
    );
}

export default Main;
