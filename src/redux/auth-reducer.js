import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
//в качестве параметров в АС передаём соотвествующие свойства из STATE
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const authorizeUserThunkCreator = () => async (dispatch) => {//getUserData// функция должна быть асинхронная
    let response = await authAPI.authorizeUser()//эта функция вернёт нам promise, при помощи await "мы ждём его"

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));//isAuth после авторизации принимает значение true
    }
}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        //если мы логинимся мы заново диспатчим thunk указаннyю ниже
        dispatch(authorizeUserThunkCreator())
    } else {
        //если в ответе с сервера приходит resultCode отличный от 0, то мы диспатчим stopSubmit("название формы",
        //ошибка - в данном случае она приходит в виде массива см. response  docAPI
        let messages = response.data.messages.length > 0 ?
            response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))// вызываем наш АС и "зануляем" входящие в него параметры
    }
}


export default authReducer;