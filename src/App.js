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
  const [topic, setTopic] = useState("Computers");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [newArticle, setNewArticle] = useState("");

  const [myArticles, setMyArticles] = useState([]);

  const current = new Date();
  let monthNumber = (current.getMonth());
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = `${monthNames[monthNumber]} ${current.getDate()}, ${current.getFullYear()}`;

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

  console.log(newArticle);

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
      body: JSON.stringify({ topic, image, title, subtitle, author, date, newArticle }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('You published the article ' + data);
      });
  }

  return (
    <div className="App">
      <h2>Add an Article</h2>


      <label>
        <h4>Article Topic:</h4>
        <select value={topic} onChange={e => setTopic(e.target.value)}>
          <option value="Computers">Computers</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Politics">Politics</option>
        </select>
      </label>

      <form>
        <label>
          <h4>Add optional image URL:</h4>
          <input type="text" name="name" onChange={e => setImage(e.target.value)} />
        </label>
      </form>


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
      <h4>By {author}. {date}.</h4>
      <ReactQuill modules={modules} ReactQuill theme="snow" onChange={setNewArticle} placeholder="Start typing..." />
      <br></br>
      <button onClick={onClickAdd}>Publish Article</button>
      <br></br>
      <h2>Your articles</h2>
      {myArticles.map((article) => <p>{article.title}</p>)}
    </div>
  )
}



export default App;