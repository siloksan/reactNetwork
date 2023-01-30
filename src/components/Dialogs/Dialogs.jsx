import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
//создаём отдельную переменную за пределами формы, иначе будет зацикливание
let maxLength = maxLengthCreator(100);
//компонента для формы сообщения
const AddMessageForm = (props) => {

    return (
        //в качестве аргумента для form передаём через пропсы handleSubmit("обработчик отправки формы")
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Enter your message'} component={Textarea}
                        validate={[required, maxLength]} name={'newMessageElement'}/></div>
            <div>
                <button>Add message</button>
            </div>
        </form>)
}

//оборачиваем нашу ComponentForm в reduxForm, необходимо дать её соотетствующее название
const DialogsReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} key={d.id} id={d.id}/>))
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

//создаём callback функцию с параметром value, а value это объект.
    const addNewMessage = (value) => {
        //properties у объекта value называются также как name у Field
        //в функцию которая отправляет сообщение передаём наше сообщение в виде свойства
        props.addMessage(value.newMessageElement);
    }

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                {/*передаём нашей вышестоящей компоненте функцию,
                она вызывается когда в компоненту приходит Submit
                (т.е. когда нажали кнопку добавить сообщение*/}
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>)
}

export default Dialogs;