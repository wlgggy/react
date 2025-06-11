import { Route, Routes, useParams } from "react-router";
import Main from "../components/pages/Main";
import App from "../App";
import Sub from "../components/pages/Sub";
import UpdateBoard from "../components/pages/Sub";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<Main />} />
      <Route path="/sub/:no" element={<Sub />} />
    </Routes>
  );
}

function BoardUpdateWrapper() {
  const { no } = useParams();
  return <BoardUpdate no={no} />;
}

export default Router;