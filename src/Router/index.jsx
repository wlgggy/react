import { Route, Routes } from "react-router";
import Main from "../components/pages/Main";
import App from "../App";
import Sub from "../components/pages/Sub";

function Router() {
  return (
      <Routes>
        <Route path="/" element = {<App/>}/>
        <Route path="/main" element = {<Main/>}/>
        <Route path="/sub" element = {<Sub/>}/>
      </Routes>
  );
}

export default Router;