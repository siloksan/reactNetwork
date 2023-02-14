import {authorizeUserThunkCreator} from "./auth-reducer";
//Перед названием action нужно использовать название редюсеров
const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                //создаём копию для того чтобы все остальные свойства state не перезатирались
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

export const initializeSuccessAC = () => ({type: INITIALIZED_SUCCESS})

export const initializeAppThunkCreator = () => (dispatch) => {
    //метод dispatch возвращает значение функции если "грубо"
    let promise = dispatch(authorizeUserThunkCreator());

    Promise.all([promise])
        .then(() => {
            dispatch(initializeSuccessAC())
        });
}

export default appReducer;