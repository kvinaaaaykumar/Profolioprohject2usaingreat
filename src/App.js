import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./component/Home";
import "./Style/App.css"

function App() {
  return (
    <>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
