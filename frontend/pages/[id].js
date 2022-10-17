import { useState, useEffect } from "react"
import Head from 'next/head'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'
import { Center, Text, Heading } from '@chakra-ui/react'
import Navbar from "./Navbar"


const Post = () => {

    const router = useRouter()

    console.log(router)
    //console.log(router.asPath.slice(1))

    const [post, setPost] = useState([])

    useEffect(() => {
        const id = {}
        if (router.isReady) {
            id = router.asPath.slice(1)
        }
        fetch('/fetch_post', {
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
    }, [router.isReady, router.asPath]);

    return (
        <div>
            <Navbar />
            <Head>
                <title>{post.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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