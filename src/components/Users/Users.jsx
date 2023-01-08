import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from "../../asets/images/user.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (PageNumber) => {
        this.props.setCurrentPage(PageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${PageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let slicedPages;
        let curPage = this.props.currentPage;
        if (curPage - 3 < 0) {
            slicedPages = pages.slice(0, 5);
        } else {
            slicedPages = pages.slice(curPage - 3, curPage + 2);
        }

        return <div>
            <div className={styles.sidePage}>
                {slicedPages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectPage : undefined}
                                 onClick={() => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div className={styles.user} key={u.id}>
            <span className={styles.photoFollow}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                         className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}

export default Users;