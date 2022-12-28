const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        dialogsPage: {
            dialogs: [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Victor'}, {
                id: 4, name: 'Kseniya'
            }, {id: 5, name: 'Anastasiya'},], messages: [{id: 1, message: 'Hi'}, {id: 2, message: 'How are you?'}, {
                id: 3, message: 'What\'s new?'
            }, {id: 4, message: 'Yo'}], newMessageText: 'Write something.'
        }, profilePage: {
            posts: [{id: 1, post: 'Hi, how are you?', like: 50}, {id: 2, post: 'It\'s my first post!', like: 20}, {
                id: 3, post: 'You look nice', like: 23
            }], newPostText: 'It Mass Transit!'
        }, sideBar: [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Maxim'}]
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe (observe) {
        this._callSubscriber = observe;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4, post: store._state.profilePage.newPostText, like: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5, message: store._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default store;
window.state = store;