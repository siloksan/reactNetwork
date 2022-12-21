import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [{id: 1, name: 'John'}, {id: 2, name: 'Fiodor'}, {id: 3, name: 'Victor'}, {
    id: 4, name: 'Kseniya'
}, {id: 5, name: 'Anastasiya'},];

let posts = [{id: 1, post: 'Hi, how are you?', like: 50}, {id: 2, post: 'It\'s my first post!', like: 20}, {
    id: 2,
    post: 'You look nice',
    like: 23
}]

let messages = [{id: 1, messages: 'Hi'}, {id: 2, messages: 'How are you?'}, {
    id: 3, messages: 'What\'s new?'
}, {id: 4, messages: 'Yo'}, {id: 5, messages: 'Yo'},];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// export {dialogs, posts, messages}
