import { useState, useEffect, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';


const AddArticle = () => {
    const [topic, setTopic] = useState("Computers");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [author, setAuthor] = useState("");
    const [newArticle, setNewArticle] = useState("");

    const current = new Date();
    let monthNumber = (current.getMonth());
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = `${monthNames[monthNumber]} ${current.getDate()}, ${current.getFullYear()}`;

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setNewArticle(editorRef.current.getContent());
        }
    };

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

            <h4>By {author}. {date}.</h4>
            <Editor onChange={log}
                apiKey={process.env.REACT_APP_TINY_MCE}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <br></br>
            <button onClick={onClickAdd}>Publish Article</button>
        </div>
    )
}

export default AddArticle;
