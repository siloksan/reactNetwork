import React from "react";

let state = {
    dialogsPage: {
        dialogs: [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Victor'}, {
            id: 4, name: 'Kseniya'
        }, {id: 5, name: 'Anastasiya'},],
        messages: [{id: 1, message: 'Hi'}, {id: 2, message: 'How are you?'}, {
            id: 3, message: 'What\'s new?'
        }, {id: 4, message: 'Yo'}]
    },
    profilePage: {
        posts: [{id: 1, post: 'Hi, how are you?', like: 50}, {id: 2, post: 'It\'s my first post!', like: 20}, {
            id: 3, post: 'You look nice', like: 23
        }],
    },
    sideBar: [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Maxim'}]
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        post: postMessage,
        like: 0
    }
    state.profilePage.posts.push(newPost);
}

export let addMessage = (nextMessage) => {
    let newMessage = {
        id: 5,
        message: nextMessage,
    }
    state.dialogsPage.messages.push(newMessage);
}

export default state;