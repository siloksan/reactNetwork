let state = {
    dialogsPage: {
        dialogs: [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Victor'}, {
            id: 4, name: 'Kseniya'
        }, {id: 5, name: 'Anastasiya'},],
        messages: [{id: 1, messages: 'Hi'}, {id: 2, messages: 'How are you?'}, {
            id: 3, messages: 'What\'s new?'
        }, {id: 4, messages: 'Yo'}, {id: 5, messages: 'Yo'},]
    },
    profilePage: {
        posts: [{id: 1, post: 'Hi, how are you?', like: 50}, {id: 2, post: 'It\'s my first post!', like: 20}, {
            id: 2, post: 'You look nice', like: 23
        }],
    }
}

export default state;