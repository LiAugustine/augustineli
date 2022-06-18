import { useState, useEffect, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

const EditArticles = () => {
    const [articles, setArticles] = useState([]);
    const editorRef = useRef(null);

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

    function handleTitleEdit(i, e) {
        const newArticles = articles.slice();
        newArticles[i].title = e.target.value;
        setArticles(newArticles);
    }

    function handleSubtitleEdit(i, e) {
        const newArticles = articles.slice();
        newArticles[i].subtitle = e.target.value;
        setArticles(newArticles);
    }

    function handleTopicEdit(i, e) {
        const newArticles = articles.slice();
        newArticles[i].topic = e.target.value;
        setArticles(newArticles);
    }
    function handleImageEdit(i, e) {
        const newArticles = articles.slice();
        newArticles[i].image = e.target.value;
        setArticles(newArticles);
    }
    function handleArticleEdit(i, e) {
        const newArticles = articles.slice();
        newArticles[i].article = e.target.value;
        setArticles(newArticles);
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
                alert(data);
            });
    }

    return (
        <div>
            <h2>Edit your articles</h2>
            <button onClick={onClickSave}>Save all changes</button>
            {articles.map((article, i) => <p>
                Title: <input type="text" defaultValue={article.title} onChange={(e) => handleTitleEdit(i, e)} /> {' '}
                Subtitle: <input type="text" defaultValue={article.subtitle} onChange={(e) => handleSubtitleEdit(i, e)} />  {' '}
                Topic:  {' '}
                <label>
                    <select defaultValue={article.topic} onChange={(e) => handleTopicEdit(i, e)}>
                        <option value="Computers">Computers</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Politics">Politics</option>
                    </select>
                </label>
                Image: <input type="text" defaultValue={article.image} onChange={(e) => handleImageEdit(i, e)} />  {' '}
                <button onClick={() => handleDelete(i)}>Delete Article</button>
                Article Text:
                <Editor onChange={(e) => handleArticleEdit(i, e)}
                    apiKey={process.env.REACT_APP_TINY_MCE}
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={article.article}
                    init={{
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