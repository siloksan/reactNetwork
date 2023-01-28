import profileReducer from "./profile-reducer";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers ({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    authUser: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;