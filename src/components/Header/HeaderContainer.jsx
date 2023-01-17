import React from 'react';
import Header from "./Header";
import {authorizeUserThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authorizeUserThunkCreator()
    }

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login
})

export default connect(mapStateToProps, {authorizeUserThunkCreator})(HeaderContainer);

