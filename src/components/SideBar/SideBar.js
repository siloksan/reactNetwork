import React from "react";
import styles from './SideBar.module.css'
import userPhoto from "../../asets/images/Avatar-PNG-Images-HD.png"

const SideBar = (props) => {
    return (<div className={styles.sideBar}>{
            props.users.map(u => <div key={u.id}>
                {u.followed ? null :
                    <div>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="avatar" className={styles.userPhoto}/>
                        </div>
                        <div  className={styles.name}>{u.name}</div>
                    </div>
                }
            </div>)
        }</div>
    )
}

export default SideBar;