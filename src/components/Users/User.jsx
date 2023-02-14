import React from "react";
import styles from './Users.module.css'
import userPhoto from "../../asets/images/user.png"
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollowThunkCreator, followThunkCreator}) => {
    return (
        <div className={styles.user} key={user.id}>
            <span className={styles.photoFollow}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar"
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.includes(user.id)} onClick={() => {
                            unfollowThunkCreator(user.id)
                        }}> Unfollow </button> :
                        <button disabled={followingInProgress.includes(user.id)} onClick={() => {
                            followThunkCreator(user.id)
                        }}>Follow</button>}
                        </div>
                        </span>
            <span className={styles.aboutUser}>
                        <span>
                        <div>{user.name}</div>
                        <div>{user.id}</div>
                        <div>{"user.status"}</div>
                        </span>
                        <span className={styles.location}>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                        </span>
                        </span>
        </div>)
}
export default User;