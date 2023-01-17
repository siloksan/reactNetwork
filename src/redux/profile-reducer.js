import {UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', like: 50},
        {id: 2, post: 'It\'s my first post!', like: 20},
        {id: 3, post: 'You look nice', like: 23}
    ],
    newPostText: 'It Mass Transit!',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: state.newPostText, like: 0}],
                newPostText:''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const profileThunkCreator = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 2;
        }
        UsersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}


export default profileReducer;