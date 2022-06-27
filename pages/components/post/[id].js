import { useRouter } from 'next/router';
const Post = () => {

    const router = useRouter()
    const { id } = router.query



    return (
        <div>
            <p>{id}</p>
        </div>
    )
}

export default Post
