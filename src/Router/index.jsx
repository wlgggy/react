import { Route, Routes, useParams } from "react-router";
import Main from "../components/pages/Main";
import App from "../App";
import UpdateBoard from "../components/pages/Update";
import CreateBoard from "../components/pages/Create";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<Main />} />
      <Route path="/update/:no" element={<UpdateBoard />} />
      <Route path="/create" element={<CreateBoard />} />
    </Routes>
  );
}

function BoardUpdateWrapper() {
  const { no } = useParams();
  return <BoardUpdate no={no} />;
}

export default Router;