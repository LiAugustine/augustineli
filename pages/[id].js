import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import { Center, Text, Heading } from '@chakra-ui/react'
import Navbar from "./Navbar";


const Post = () => {

    const router = useRouter()
    const id = {}
    console.log(router)
    //console.log(router.asPath.slice(1))

    useEffect(() => {
        if (router.isReady) {
            id = router.asPath.slice(1)
        }
    }, [router.isReady]);


    const [post, setPost] = useState([])

    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchSomethingById = async () => {
            const response = await fetch('/fetch_post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id),
            })
                .then((response) => response.json())
                .then((data) => {
                    setPost(data);
                });

        }
        fetchSomethingById()
    }, [id]);


    return (
        <div>
            <Navbar />
            <Center>
                <Heading as='h3' size='xl'>{post.title}</Heading>
            </Center>

            <Center>
                <Text fontSize='xl' fontWeight='semibold' color='gray.500'>
                    {post.subtitle}
                </Text>
            </Center>

            <Center mb={6}>
                <Text fontSize='md'>
                    {post.author} | {post.date}
                </Text>
            </Center>

            <Center>
                {parse(String(post.article))}
            </Center>

        </div>
    )
}



export default Post
