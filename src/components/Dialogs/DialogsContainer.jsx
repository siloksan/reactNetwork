import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let onMessageChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state.dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;