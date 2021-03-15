import {USERS} from "../../constants";
const initialState = {
 totalUsersCount: 10,
  currentPage: 1,
  isFetching: true,
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.SET:
    return {...state, users: action.payload}
    case USERS.FETCHING:
      return {...state, isFetching: true}
    case USERS.NOTFETCHING:
      return {...state, isFetching: false}
    case USERS.CURRENTPAGE:
      return {...state, currentPage: action.payload}
    default:
      return state
  }
}
export default usersReducer