// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
//
// let store = {
//     _state: {
//         dialogsPage: {
//             dialogs: [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Victor'}, {
//                 id: 4, name: 'Kseniya'
//             }, {id: 5, name: 'Anastasiya'},], messages: [{id: 1, message: 'Hi'}, {id: 2, message: 'How are you?'}, {
//                 id: 3, message: 'What\'s new?'
//             }, {id: 4, message: 'Yo'}], newMessageText: 'Write something.'
//         }, profilePage: {
//             posts: [{id: 1, post: 'Hi, how are you?', like: 50}, {id: 2, post: 'It\'s my first post!', like: 20}, {
//                 id: 3, post: 'You look nice', like: 23
//             }], newPostText: 'It Mass Transit!'
//         }, sideBar: [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Maxim'}]
//     },
//     _callSubscriber() {
//         console.log('State changed');
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe (observe) {
//         this._callSubscriber = observe;
//     },
//     dispatch(action) {
//         dialogsReducer(this._state.dialogsPage, action);
//         profileReducer(this._state.profilePage, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;
// window.state = store;