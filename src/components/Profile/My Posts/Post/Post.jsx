import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg"
                alt="avatar"/>
            {props.message}
            <div>
                <span>{props.like} like</span>
            </div>
        </div>
    )
}
export default Post;