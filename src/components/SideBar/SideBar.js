import React from "react";
import classes from './SideBar.module.css'
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = (props) => {
    let sideBarElements = props.friends.map(sb => (<SideBarItem name={sb.name} key={sb.id} id={sb.id}/>))

    return (
        <div className={classes.content}>
            {sideBarElements}
        </div>
    )
}

export default SideBar;