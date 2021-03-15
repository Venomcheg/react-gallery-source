import React from 'react'
import {connect} from 'react-redux'
import {getUsers} from "./redux/actions/usersActions";
import Users from "./components/users/users";
import {Main, Wrapper} from "./global-styles";
import {Switch,Route} from "react-router-dom";
import Albums from "./components/albums/albums";
import Photos from "./components/photos/photos";
import Error from './components/error/error'
import Header from "./components/header/header";
import {setUsersCurrentPage, setPageSize} from "./redux/selectors";

class App extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  }
  render() {

    return (

        <Wrapper>
          <Header/>
          <Main>
            <Switch>
              <Route exact path={'/'} component={Users}/>
              <Route path={'/users/:userId?/albums'} component={Albums}/>
              <Route path={'/albums/:albumId?/photos'} component={Photos}/>
              <Route path={'*'} component={Error}/>
            </Switch>
          </Main>
        </Wrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  currentPage: setUsersCurrentPage(state),
  pageSize: setPageSize(state)
})
export default connect(mapStateToProps,{getUsers})(App);
