import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, updateStatusThunk, profileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export function withRouter(Children) {
    return (props) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.profileThunkCreator(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatusThunk}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.authUser.userId,
    isAuth: state.authUser.isAuth
})

export default compose(
    connect(mapStateToProps, {setUserProfile, profileThunkCreator, getStatusThunk, updateStatusThunk}),
    withRouter, WithAuthRedirect
)(ProfileContainer);