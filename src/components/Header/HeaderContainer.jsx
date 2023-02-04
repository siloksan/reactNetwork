import React from 'react';
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer);//передаём thunk для выхода из аккаунта

