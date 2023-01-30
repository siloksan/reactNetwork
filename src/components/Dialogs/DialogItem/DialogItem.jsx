import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import MyAvatar from "../../common/MyAvatar/MyAvatar";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (<div className={classes.dialog + " " + classes.active}>
        <MyAvatar/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
export default DialogItem;