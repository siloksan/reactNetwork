//селектор - функция которая делает выборку необходимых данных из state
//селектор вызывается каждый раз при изменении state, но необходимо чтобы эта функция
//не перезапускалась каждый раз если это бесмысленно

// import {createSelectorHook} from "react-redux";


export const getUsers = (state) => {
    return state.usersPage.users;
}
// //пока нет небходимости использовать reselect, в качестве обучения создадим getUsersReselect
// export const getUsersReselect = createSelectorHook( state => {
//     return state.usersPage.filter(u => true)//бесмысленное условие, только для ознакомления
// })

export const getPageSize = (state) => {
    return  state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return  state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return  state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return  state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return  state.usersPage.followingInProgress;
}