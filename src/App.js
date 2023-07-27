import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchresult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/error404";
import Admind from "./pages/admind/Admind"
import Crud from "./pages/admind/Crud"

function App() {
  
  return (
    <div className="App">
      
      
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Details />} />
          <Route path="/admin" element={<Admind />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/videop/:userId" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
    
    </div>
  );
}

export default App;
