import './App.css';
import AddArticle from "./pages/AddArticle";
import EditArticles from "./pages/EditArticles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h2>Manage your articles</h2>
      <Router>
        <nav>
          <Link to="/AddArticle">Add Article</Link>
          <br></br>
          <br></br>
          <Link to="/EditArticles">Edit Articles</Link>
        </nav>
        <Routes>
          <Route path="/AddArticle" element={<AddArticle />} />
          <Route path="/EditArticles" element={<EditArticles />} />
        </Routes>
      </Router>
    </div>
  )
}



export default App;
