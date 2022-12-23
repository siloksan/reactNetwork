import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = props.state.messages.map(m => <Message message={m.messages} id={m.id}/>)

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;