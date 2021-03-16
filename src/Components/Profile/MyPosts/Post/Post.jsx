import React from 'react';
import style from './../Posts/Post.module.css';

const Post = (props) => {
    return (
        <div className={style.posts}>
            <img src="https://ru.hellomagazine.com/thumb/755x550_0/images/2020/july/katya/mask.jpg"/>
            {
                props.message
            }
            <div>Likes {props.LikesCounter}</div>
        </div>
    )

}

export default Post;


