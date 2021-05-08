import React from 'react';
import style from './/Post.module.css';



const Post = (props) => {
    return (
        <div className={style.posts}>
            <img src="https://ru.hellomagazine.com/thumb/755x550_0/images/2020/july/katya/mask.jpg"/>
            {
                props.message
            }
            <div>Likes {props.likesCount}</div>
        </div>
    )

}

export default Post;



