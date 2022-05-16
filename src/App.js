import { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};


const App = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [newArticle, setNewArticle] = useState("");

  const [myArticles, setMyArticles] = useState("");

  const current = new Date();
  const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

  useEffect(() => {
    fetch('/get_articles', {
      method: "GET",
      headers: {
        "content_type": "application/json",
      },
    }).then(response => response.json())
      .then(data => {
        setMyArticles(data);
      });
  }, []);

  useEffect(() => {
    fetch('/get_author', {
      method: "GET",
      headers: {
        "content_type": "application/json",
      },
    }).then(response => response.json())
      .then(data => {
        setAuthor(data);
      });
  }, []);



  function onClickAdd() {
    fetch('/add_article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, subtitle, author, date, newArticle }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('You published the article ' + data);
      });


  }

  return (
    <div className="App">
      <h2>Add an Article</h2>
      <form>
        <label>
          <h4>Article Title:</h4>
          <input type="text" name="name" onChange={e => setTitle(e.target.value)} />
        </label>
      </form>

      <form>
        <label>
          <h4>Article Subtitle:</h4>
          <input type="text" name="name" onChange={e => setSubtitle(e.target.value)} />
        </label>
      </form>
      <h4>{author}, {date}</h4>
      <ReactQuill modules={modules} ReactQuill theme="snow" onChange={setNewArticle} placeholder="Start typing..." />
      <p>{newArticle}</p>
      <br></br>
      <button onClick={onClickAdd}>Publish Article</button>
      <br></br>
      <h2>Your articles</h2>
    </div >
  )
}



export default App;