import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.post} like={p.like}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (<div className={s.postBlock}>
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} placeholder='Write already' cols="40" rows="5"/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>)
}
export default MyPosts;