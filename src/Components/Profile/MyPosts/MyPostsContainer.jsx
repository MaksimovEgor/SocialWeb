import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} LikesCounter={p.likesCounter}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={style.postBlock}>
            <h3>My Posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;




