import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '1017089a-9484-47ab-9bcd-9f039a153f08'
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followToUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowToUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    authorizeUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        console.warn('Please use profileAPI');
        return profileAPI.getUserProfile(userId)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}
//
// export const authAPI = {
//     authUser(userId) {
//         return instance.post(`auth/login/${userId}`)
//             .then(response => {
//                 return response.data
//             })
//     }
// }