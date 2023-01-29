const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Fiodor'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Kseniya'},
        {id: 5, name: 'Anastasiya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What\'s new?'},
        {id: 4, message: 'Yo'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                //новое сообщение теперь берём не из state, а из addMessageActionCreator
                messages: [...state.messages, {id: 5, message: action.newMessageElement}],
            };
        }
        default:
            return state;
    }
}
// передаём параметр содержащий в качестве значения новое сообщение в АС
export const addMessageActionCreator = (newMessageElement) => ({type: ADD_MESSAGE, newMessageElement});

export default dialogsReducer;