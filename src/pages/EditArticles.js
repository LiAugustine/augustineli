import { useState, useEffect, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

const EditArticles = () => {
    const [articles, setArticles] = useState([]);

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    useEffect(() => {
        fetch('/get_articles', {
            method: "GET",
            headers: {
                "content_type": "application/json",
            },
        }).then(response => response.json())
            .then(data => {
                setArticles(data);
            });
    }, []);

    function handleDelete(i) {
        setArticles([...articles.slice(0, i), ...articles.slice(i + 1)]);
    }

    function onClickSave() {
        fetch('/save_articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articles),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }

    return (
        <div>
            <h2>Edit your articles</h2>
            <button onClick={onClickSave}>Save all changes</button>
            {articles.map((article, i) => <p>
                Title: <input type="text" defaultValue={article.title} />  {' '}
                Subtitle: <input type="text" defaultValue={article.subtitle} />  {' '}
                Topic:  {' '}
                <label>
                    <select defaultValue={article.topic}>
                        <option value="Computers">Computers</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Politics">Politics</option>
                    </select>
                </label>
                Image: <input type="text" defaultValue={article.image} />  {' '}
                <button onClick={() => handleDelete(i)}>Delete Article</button>
                Article Text:
                <Editor onChange={log}
                    apiKey={process.env.REACT_APP_TINY_MCE}
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={article.article}
                    init={{
                        width: 1200,
                        height: 300,
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
            </p>)
            }
        </div>
    );
}

export default EditArticles;