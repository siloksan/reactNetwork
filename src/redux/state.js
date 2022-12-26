let rerenderEnterTree = () => {
    console.log('State changed');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 4, post: state.profilePage.newPostText, like: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEnterTree(state);
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEnterTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5, message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEnterTree(state);
}

export const updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEnterTree(state);
}

export const subscribe = (observe) => {
    rerenderEnterTree = observe;
}

export default state;
window.state = state;