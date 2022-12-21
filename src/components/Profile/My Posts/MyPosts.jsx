import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.post} like={p.like}/>)
    return (<div className={s.postBlock}>
        <div>
            <h3>My post</h3>
            <div>
                <div><
                    textarea name="" id="" cols="40" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>)
}
export default MyPosts;