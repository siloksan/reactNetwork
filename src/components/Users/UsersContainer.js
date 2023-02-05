import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    toggleFollowingProgress, getUserThunkCreator, unfollowThunkCreator, followThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

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
                   followingInProgress={this.props.followingInProgress}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        getUserThunkCreator,
        unfollowThunkCreator,
        followThunkCreator
    })
)(UsersContainer);