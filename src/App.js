import AddArticle from "./pages/AddArticle";
import EditArticles from "./pages/EditArticles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Heading } from '@chakra-ui/react'

const App = () => {
  return (
    <div className="App">
      <Box bg='Black' w='100%' p={4} color='white'>
        Augustine Li
      </Box>
      <Heading>Manage your articles</Heading>
      <Router>
        <nav>
          <Link to="/AddArticle">Add Article</Link>
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
