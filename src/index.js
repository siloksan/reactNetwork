import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEnterTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEnterTree(store.getState());
store.subscribe(rerenderEnterTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();