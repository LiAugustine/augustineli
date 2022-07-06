import { useRouter } from 'next/router';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
import { Center, Text, Heading } from '@chakra-ui/react'
import Navbar from "./Navbar";

const Post = () => {

    const router = useRouter()
    const { title, subtitle, author, date, article } = router.query
    console.log(router.query)
    const sanitizedArticle = sanitizeHtml(article);

    return (
        <div>
            <Navbar />
            <Center>
                <Heading as='h3' size='xl'>{title}</Heading>
            </Center>

            <Center>
                <Text fontSize='xl' fontWeight='semibold' color='gray.500'>
                    {subtitle}
                </Text>
            </Center>

            <Center mb={6}>
                <Text fontSize='md'>
                    {author} | {date}
                </Text>
            </Center>

            <Center>
                {parse(sanitizedArticle)}
            </Center>

        </div>
    )
}

export default Post
