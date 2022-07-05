import React, { useState } from 'react';
import { BsHeartFill, BsHeart } from "react-icons/bs";


const LikeButton = (props) => {
    const [id, setId] = useState(props.article_id)
    const [likes, setLikes] = useState(props.likes);
    const [liked, setLiked] = useState(props.liked);

    const handleClick = (id, liked) => {
        if (liked == 'true') {
            setLikes(likes - 1);
            setLiked('false');
            onClickUnlike(id)
        } else {
            setLikes(likes + 1);
            setLiked('true');
            onClickLike(id)
        }

    };
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
            {liked == 'true' ? (
                <button onClick={() => handleClick(id, liked)}>
                    <span> <BsHeartFill /> {likes}</span>
                </button>
            ) : (

                <button onClick={() => handleClick(id, liked)}>
                    <span> <BsHeart /> {likes}</span>
                </button>
            )
            }
        </div>

    );
};

export default LikeButton;