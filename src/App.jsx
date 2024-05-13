import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assents/styles/GlobalStyle";
import IndexPage from "./pages/index/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
