import React from "react";
import classes from './../Dialogs.module.css';
import MyAvatar from "../../Profile/MyAvatar/MyAvatar";

const Message = (props) =>
    props.id % 2 == 1 ? (<div className={classes.message1}><MyAvatar/>{props.message}</div>) : (<div className={classes.message2}>{props.message}<MyAvatar/></div>);


export default Message;