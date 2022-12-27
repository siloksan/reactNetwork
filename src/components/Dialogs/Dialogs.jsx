import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} cols="40" rows="5"/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;