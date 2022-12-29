import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = props.dialogsPage.newMessageText;

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} value={newMessageElement} placeholder='Enter your name' cols="40" rows="5"/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;