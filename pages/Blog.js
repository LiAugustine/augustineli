import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Heading, Box, Text, Badge, Link, Center, Image, SimpleGrid } from '@chakra-ui/react'
import Navbar from "./Navbar"
import LikeButton from "./components/Like"

function Blog() {
    const [articles, setArticles] = useState([])

    const router = useRouter()


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
            <Navbar />
            <Head>
                <title>Blog - Augustine Li</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Center>
                <Box maxW='36rem'>
                    <Center>
                        <Heading as='h3' mb={3}>Blog</Heading>
                    </Center>
                    <Center>
                        <Text fontSize='xl'>
                            Blog posts on a variety of topics.
                        </Text>
                    </Center>
                </Box>
            </Center>

            {articles.map((article) =>
                <Center key={article.id}>
                    <SimpleGrid columns={1} spacing={3} >

                        <Box maxW='md' borderWidth='2px' borderRadius='md'>

                            <Image src={article.image} alt="" />
                            <Box p='6'>
                                <Box display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme='blue'>
                                        {article.topic}
                                    </Badge>
                                    <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                    >
                                        {article.date}
                                    </Box>
                                </Box>

                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    <Link onClick={() => router.push({
                                        pathname: "/" + article.id,
                                        query: {
                                            id: article.id,
                                            //title: article.title,
                                            //subtitle: article.subtitle,
                                            //topic: article.topic,
                                            //image: article.image,
                                            //author: article.author,
                                            //date: article.date,
                                            //article: article.article,
                                            //likes: article.likes,
                                        }
                                    }, "/" + article.id)}>
                                        {article.title}
                                    </Link>
                                </Box>

                                <Box>
                                    <Box as='span' color='gray.500' fontSize='sm' fontWeight='semibold'>
                                        {article.subtitle}
                                    </Box>
                                </Box>

                                <Box display='flex' mt='2' alignItems='center'>
                                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                        <LikeButton article_id={article.id} likes={article.likes} liked={article.userLiked} />
                                    </Box>
                                </Box>

                            </Box>

                        </Box>

                    </SimpleGrid>

                </Center>

            )
            }
        </div >
    )
}


export default Blog;