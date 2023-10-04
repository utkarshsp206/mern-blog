import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/about" element={<About />} />  
          <Route path="/articles-list" element={<ArticleList />} />  
          <Route path="/article/:name" element={<Article />} />    
          <Route path="*" element={<NotFound/>} /> 
        </Routes>
      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;
