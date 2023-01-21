import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authUser.isAuth
})

const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForRedirect) (RedirectComponent);// Димыч создал переменную и отдал ей это значение

}

export default WithAuthRedirect;