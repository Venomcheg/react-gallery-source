import {PAGINATION} from "../../constants";


export const unMountPagination = () => (dispatch) => {
  dispatch({
    type: PAGINATION.UNMOUNT
  })
}