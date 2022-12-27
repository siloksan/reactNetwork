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
    addPost() {
        let newPost = {
            id: 4, post: store._state.profilePage.newPostText, like: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 5, message: store._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(text) {
        this._state.dialogsPage.newMessageText = text;
        this._callSubscriber(this._state);
    },
    subscribe (observe) {
        this._callSubscriber = observe;
    },
}

export default store;
window.state = store;