import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

//component for form post
const MyPostsForm = (props) => {
    return (//в качестве аргумента для form передаём через пропсы handleSubmit("обработчик отправки формы")
        <form onSubmit={props.handleSubmit}>
            <div>
                <div><Field placeholder={'Write already'} component={'textarea'} name={'newPostElement'}/></div>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}

//оборачиваем нашу ComponentForm в reduxForm, необходимо дать её соотетствующее название
const MyPostReduxForm = reduxForm({form: 'ProfileAddMyPostForm'})(MyPostsForm)

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.post} key={p.id} like={p.like}/>)

    //создаём callback функцию с параметром value, а value это объект.
    const addNewPost = (value) => {
        //properties у объекта value называются также как name у Field
        //в функцию которая отправляет сообщение передаём наше сообщение в виде свойства
        props.addPost(value.newPostElement);
    }

    return (<div className={s.postBlock}>
        <div>
            <h3>My post</h3>
            {/*передаём нашей вышестоящей компоненте функцию,
               она вызывается когда в компоненту приходит Submit
                (т.е. когда нажали кнопку добавить сообщение*/}
            <MyPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>)
}
export default MyPosts;