import { Route, Routes, json } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import About from "./pages/about";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/detail/:id" element={<NewsDetail />} />
      </Routes>
    </>
  );
}

export default App;
