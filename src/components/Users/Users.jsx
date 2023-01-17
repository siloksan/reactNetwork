import React from "react";
import styles from './Users.module.css'
import userPhoto from "../../asets/images/user.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    return <div>
        <div className={styles.sidePage}>
            {slicedPages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectPage : undefined}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={styles.user} key={u.id}>
            <span className={styles.photoFollow}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.includes(u.id)} onClick={() => {
                            props.unfollowThunkCreator(u.id)
                        }}> Unfollow </button> :
                        <button disabled={props.followingInProgress.includes(u.id)} onClick={() => {
                            props.followThunkCreator(u.id)
                        }}>Follow</button>}
                        </div>
                        </span>
                <span className={styles.aboutUser}>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.id}</div>
                        <div>{"u.status"}</div>
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