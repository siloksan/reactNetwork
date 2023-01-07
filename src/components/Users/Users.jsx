import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from "../../asets/images/user.png"

const Users = (props) => {

    let getUsers = () => {if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {props.setUsers(response.data.items)
        })
    }}
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
        props.users.map(u => <div className={styles.user} key={u.id}>
            <span className={styles.photoFollow}>
                <div>
                    <img src={ u.photos.small != null ? u.photos.small = '' : userPhoto } alt="avatar" className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
            </span>
            <span className={styles.aboutUser}>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span className={styles.location}>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users;