import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";
//сначала определяем данные для проверки,
//затем функцию, в нашем случае reducer
//проверяем оправдались ли наши ожидании при проверке

let state = {
    posts: [
        {id: 1, post: 'Hi, how are you?', like: 50},
        {id: 2, post: 'It is my first post!', like: 20},
        {id: 3, post: 'You look nice', like: 23}
    ]
}
it ('post should be added', () => {
    //testData
    let action = addPostActionCreator('test post');
    //action
    let newState = profileReducer(state, action);
    //expectation
    expect(newState.posts.length).toBe(4);
});

it ('Message in the new post should be correctly', () => {
    let action = addPostActionCreator('test post');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

it ('After deleted array length should be decrement', () => {
    let action = deletePostActionCreator(2);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});


