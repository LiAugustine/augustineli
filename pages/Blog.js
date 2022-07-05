import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Text, Box, Badge, Link, Center, Image, IconButton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Navbar from "./Navbar";

function Blog() {
    const [articles, setArticles] = useState([])
    const [user, setUser] = useState(false)
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

    useEffect(() => {
        fetch('/get_user', {
            method: "GET",
            headers: {
                "content_type": "application/json",
            },
        }).then(response => response.json())
            .then(data => {
                setUser(data);
            });
    }, []);

    function onClickLike(article_id) {
        fetch('/like_article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(article_id),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data);
            });
    }
    function onClickUnlike(article_id) {
        fetch('/unlike_article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(article_id),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data);
            });
    }

    return (
        <div>
            <Navbar />
            {articles.map((article) =>
                < Center h='170px' >
                    <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={article.image} />
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
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
                                        title: article.title,
                                        subtitle: article.subtitle,
                                        topic: article.topic,
                                        image: article.image,
                                        author: article.author,
                                        date: article.date,
                                        article: article.article,
                                        likes: article.likes,
                                    }
                                }, "/" + article.id)}>
                                    {article.title}
                                </Link>
                            </Box>

                            <Box>
                                {article.subtitle}
                                <Box as='span' color='gray.600' fontSize='sm'>
                                </Box>
                            </Box>
                            {article.userLiked == 'true' ?
                                (

                                    <Box display='flex' mt='2' alignItems='center'>
                                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                            <IconButton
                                                aria-label='Liked'
                                                colorScheme='yellow'
                                                size='sm'
                                                icon={<StarIcon />}
                                                onClick={() => onClickUnlike(article.id)}
                                            />
                                            {article.likes} likes
                                        </Box>
                                    </Box>
                                ) : (
                                    <Box display='flex' mt='2' alignItems='center'>
                                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                            <IconButton
                                                aria-label='Like'
                                                variant='ghost'
                                                colorScheme='yellow'
                                                size='sm'
                                                icon={<StarIcon />}
                                                onClick={() => onClickLike(article.id)}
                                            />
                                            {article.likes} likes
                                        </Box>
                                    </Box>
                                )}

                        </Box>
                    </Box>
                </Center>
            )
            }
        </div >
    )
}

export default Blog;