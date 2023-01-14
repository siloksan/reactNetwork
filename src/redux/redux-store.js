import profileReducer from "./profile-reducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers ({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    authUser: authReducer
})

let store = createStore(reducers);
window.store = store;

export default store;