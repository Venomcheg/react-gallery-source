import {ALBUMS} from "../../constants";
const initialState = {
  isFetching: true,
  totalAlbumsCount: 10,
  currentPage: 1
}
const albumsReducer = (state=initialState, action) => {
  switch (action.type) {
    case ALBUMS.SET:
      return {...state,albums: action.payload}
    case ALBUMS.FETCHING:
      return {...state, isFetching: true}
    case ALBUMS.NOTFETCHING:
      return {...state, isFetching: false}
    case ALBUMS.UNMOUNT:
      return initialState
    case ALBUMS.CURRENTPAGE:
      return {...state, currentPage: action.payload}
    default:
      return state
  }
}
export default albumsReducer