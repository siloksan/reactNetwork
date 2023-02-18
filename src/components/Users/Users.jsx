import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

// const Users = ({
//                    users, followingInProgress, followThunkCreator, unfollowThunkCreator, totalUsersCount, pageSize,
//                    currentPage, onPageChanged
//                }) => {
//
//     return <div>
//         <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
//                    currentPage={currentPage} onPageChanged={onPageChanged}/>
//
//         {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress}
//                               followThunkCreator={followThunkCreator}
//                               unfollowThunkCreator={unfollowThunkCreator}/>)
//         }
//     </div>
// }
//
// export default Users;
//Это точно такой же вариант, но здесь передаём props с помощью деструктуризации
const Users = ({
                   users, totalUsersCount, pageSize,
                   currentPage, onPageChanged, ...props
               }) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>

        {users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                              followThunkCreator={props.followThunkCreator}
                              unfollowThunkCreator={props.unfollowThunkCreator}/>)
        }
    </div>
}
export default Users;