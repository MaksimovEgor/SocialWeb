import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Common/Validator/validator";
import {Textarea} from "../../Common/FormControl/FormComtrol";


const MyPosts = (props) => {

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.postBlock}>
            <h3>My Posts</h3>
            <div>
              <AddNewPostForm onSubmit={addNewPost} />
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>
        </div>

    )
}

const maxLength10 = maxLengthCreator(10);

function AddNewPostForm(props) {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} validate={[required, maxLength10]} name='newPostText' />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
    )
}

AddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;




