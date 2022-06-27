import { useState, useEffect } from "react";
import Link from 'next/link'
import { Box, Badge, Center, Image } from '@chakra-ui/react'

function Blog() {
    const [articles, setArticles] = useState([])

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
            {articles.map((article) =>
                <Center>
                    <Link href={'/components/post/' + article.id} key={article.id}>Link</Link>
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
                                {article.title}
                            </Box>

                            <Box>
                                {article.subtitle}
                                <Box as='span' color='gray.600' fontSize='sm'>
                                </Box>
                            </Box>

                            <Box display='flex' mt='2' alignItems='center'>
                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                    {article.likes} likes
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Center>
            )}
        </div>
    )
}

export default Blog;