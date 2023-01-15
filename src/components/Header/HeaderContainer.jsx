import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {UsersAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        UsersAPI.authorizeUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

