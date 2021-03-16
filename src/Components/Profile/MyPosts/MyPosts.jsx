import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = (props) => {
    return (
        <div>
            My Posts

            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={style.posts}>
                <Post message='Hi men' LikesCounter='89'/>
                <Post message='Pay your price' LikesCounter='888'/>
            </div>
        </div>

    )
}

export default MyPosts;
