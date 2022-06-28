import { useRouter } from 'next/router';
const Post = () => {

    const router = useRouter()
    const { id } = router.query
    const { title } = router.query



    return (
        <div>
            <p>{id}{title}</p>
        </div>
    )
}

export default Post
