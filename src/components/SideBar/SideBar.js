import React from "react";
import styles from './SideBar.module.css'

const SideBar = (props) => {
    return (<div className={styles.sideBar}>{
            props.users.map(u => <div key={u.id}>
                {u.followed ? null :
                    <div>
                        <div>
                            <img src={u.photoUrl} alt="avatar" className={styles.userPhoto}/>
                        </div>
                        <div>{u.fullName}</div>
                    </div>
                }
            </div>)
        }</div>
    )
}

export default SideBar;