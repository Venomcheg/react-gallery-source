import {usersAPI} from "../../api/api";
import {PHOTOS, USERS} from "../../constants";

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch({
    type: USERS.FETCHING
  })
  const result = await usersAPI.getUsers(currentPage, pageSize)
  dispatch({
    type: USERS.SET,
    payload: result
  })
  dispatch({
    type: USERS.NOTFETCHING
  })
}
export const onPageChanged = (currentPage) => (dispatch) => {
  dispatch({
    type: PHOTOS.FETCHING
  })
  dispatch({
    type: USERS.CURRENTPAGE,
    payload: currentPage
  })
}