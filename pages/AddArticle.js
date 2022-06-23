import { useState, useEffect, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { Button, Heading, Input, FormControl, FormLabel } from '@chakra-ui/react'


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
            <Heading>Add an Article</Heading>
            <br></br>
            <FormControl isRequired>
                <FormLabel htmlFor='title'>Article Title</FormLabel>
                <Input id='title' placeholder='Title' onChange={e => setTitle(e.target.value)} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='subtitle'>Article Subtitle</FormLabel>
                <Input id='subtitle' placeholder='Subtitle' onChange={e => setSubtitle(e.target.value)} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='topic'>Topic</FormLabel>
                <select id="topic" value={topic} onChange={e => setTopic(e.target.value)}>
                    <option value="Computers">Computers</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Politics">Politics</option>
                </select>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor='image'>Optional Image URL</FormLabel>
                <Input id='image' placeholder='Image URL' onChange={e => setImage(e.target.value)} />
            </FormControl>

            <h4>By {author}. {date}.</h4>
            <Editor onChange={log}
                apiKey={process.env.NEXT_PUBLIC_TINY_MCE}
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
            <Button onClick={onClickAdd}>Publish Article</Button>
            <br></br>
        </div>
    )
}

export default AddArticle;
