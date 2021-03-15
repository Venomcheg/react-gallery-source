import {albumsAPI} from "../../api/api";
import {ALBUMS, PHOTOS} from "../../constants";

export const getAlbums = (id, currentPage, pageSize) => async (dispatch) => {
  dispatch({
    type: ALBUMS.FETCHING
  })
  const result = await albumsAPI.getAlbums(id, currentPage, pageSize)
  dispatch({
    type: ALBUMS.SET,
    payload: result
  })
  dispatch({
    type: ALBUMS.NOTFETCHING
  })
}
export const unMountAlbums = () => (dispatch) => {
  dispatch({
    type: ALBUMS.UNMOUNT
  })
}
export const onPageChanged = (currentPage) => (dispatch) => {
  dispatch({
    type: PHOTOS.FETCHING
  })
  dispatch({
    type: ALBUMS.CURRENTPAGE,
    payload: currentPage
  })
}