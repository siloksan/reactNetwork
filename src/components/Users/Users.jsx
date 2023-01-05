import React from "react";
import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/3874/3874573.png',
                fullName: 'Dmitriy',
                status: 'Studying the React',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: false,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/3874/3874573.png',
                fullName: 'John',
                status: 'Studying the React',
                location: {city: 'Yaroslavl', country: 'Russia'}
            },
            {
                id: 3,
                followed: true,
                photoUrl: 'https://cdn-icons-png.flaticon.com/512/3874/3874573.png',
                fullName: 'Kseniya',
                status: 'Studying the React',
                location: {city: 'Yaroslavl', country: 'Russia'}
            }
            ]
        )
    }

    return (
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} alt="avatar" className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
        </div>)
    )
}

export default Users;