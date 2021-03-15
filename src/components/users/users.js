import React from 'react';
import {
  setUsersCurrentPage,
  setUsersIsFetching,
  setPageSize,
  setTotalUsersCount,
  setUsers
} from "../../redux/selectors";
import {connect} from "react-redux";
import User from "./user/user";
import Preloader from "../common/preloader/preloader";
import {ListContainer, Title} from "../../global-styles";
import Paginator from "../common/paginator/paginator";
import {unMountPagination} from "../../redux/actions/paginationActions";
import {getUsers, onPageChanged} from "../../redux/actions/usersActions";

class Users extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    (prevProps.currentPage !== this.props.currentPage) &&
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  componentWillUnmount() {
    this.props.unMountPagination()
  }

  render() {
    const {users, isFetching, totalUsersCount, pageSize, currentPage, onPageChanged} = this.props
    return (<>
        <Title>Users</Title>
        {isFetching ? <Preloader/> :
          <div>

            <ListContainer>
              {users && users.map(user => {
                  const {id, name, username, email, phone, website} = user
                  return <User key={id} id={id} name={name} username={username} email={email} phone={phone}
                               website={website}/>
                }
              )
              }
            </ListContainer>
            {(totalUsersCount > pageSize) && <Paginator
              totalCount={totalUsersCount}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChanged={onPageChanged}/>}
          </div>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: setUsers(state),
  totalUsersCount: setTotalUsersCount(state),
  pageSize: setPageSize(state),
  currentPage: setUsersCurrentPage(state),
  isFetching: setUsersIsFetching(state)
})
export default connect(mapStateToProps, {
  onPageChanged,
  getUsers,
  unMountPagination})(Users);