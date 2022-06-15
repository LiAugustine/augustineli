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

    return (
        <div>
            <h2>Edit your articles</h2>
            {articles.map((article) => <p>
                Title: <input type="text" defaultValue={article.title} />
                Subtitle: <input type="text" defaultValue={article.subtitle} />
                Topic: <input type="text" defaultValue={article.topic} />
                Image: <input type="text" defaultValue={article.image} />
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