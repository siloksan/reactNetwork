import {profileAPI, UsersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', like: 50},
        {id: 2, post: 'It\'s my first post!', like: 20},
        {id: 3, post: 'You look nice', like: 23}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: action.newPostElement, like: 0}],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

// передаём параметр содержащий в качестве значения новое сообщение в АС
export const addPostActionCreator = (newPostElement) => ({type: ADD_POST, newPostElement});
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const profileThunkCreator = (userId) => {//getUserProfile
    return (dispatch) => {
        UsersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getStatusThunk = (userId) => (dispatch) => {//getStatus
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}

export const updateStatusThunk = (status) => (dispatch) => {//getUpdateStatus
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}


export default profileReducer;