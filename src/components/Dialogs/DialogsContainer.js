import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {dialogsPage: state.dialogsPage}
}
let mapDispatchToProps = (dispatch) => {
    return {
        //Добавляем параметр newMessageElement, в нём находится добавленное сообщение
        addMessage: (newMessageElement) => dispatch(addMessageActionCreator(newMessageElement))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);