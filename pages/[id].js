import { useRouter } from 'next/router';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
import { Text, Heading } from '@chakra-ui/react'
import Navbar from "./Navbar";

const Post = () => {

    const router = useRouter()
    const { title, subtitle, author, date, article } = router.query
    console.log(router.query)
    const sanitizedArticle = sanitizeHtml(article);

    return (
        <div>
            <Navbar />
            <Heading as='h2' size='2xl'>{title}</Heading>
            <Text fontSize='xl'>
                {subtitle}
            </Text>
            <Text fontSize='md'>
                {author} | {date}
            </Text>
            <Text>
                {parse(sanitizedArticle)}
            </Text>
        </div>
    )
}

export default Post
