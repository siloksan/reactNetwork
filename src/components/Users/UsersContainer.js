import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress, getUserThunkCreator, unfollowThunkCreator, followThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../Preloader/Preloader";
import WithAuthRedirect from "../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (PageNumber) => {
        this.props.setCurrentPage(PageNumber);
        this.props.getUserThunkCreator(PageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <div>{this.props.isFetching ? <Preloader/> : null}</div>
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followThunkCreator={this.props.followThunkCreator}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

let AuthRedirectComponent = WithAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUserThunkCreator,
    unfollowThunkCreator,
    followThunkCreator,
})(AuthRedirectComponent);

