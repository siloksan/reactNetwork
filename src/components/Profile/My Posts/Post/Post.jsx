import React from "react";
import s from './Post.module.css'
import MyAvatar from "../../../common/MyAvatar/MyAvatar";


const Post = (props) => {
    return (
        <div className={s.item}>
            <MyAvatar/>
            {props.message}
            <div>
                <span>{props.like} like</span>
            </div>
        </div>
    )
}
export default Post;