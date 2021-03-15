import {photosAPI} from "../../api/api";
import {PHOTOS} from "../../constants";

export const getPhotos = (id, currentPage, pageSize) => async (dispatch) => {
  const photos = await photosAPI.getPhotos(id, currentPage, pageSize)
  const modalPhotos = await photosAPI.getAllPhotos(id)
  dispatch({
    type: PHOTOS.FETCHING
  })
  dispatch({
    type: PHOTOS.SET,
    payload: {photos, modalPhotos}
  })
  dispatch({
    type: PHOTOS.NOTFETCHING
  })
}
export const unMountPhotos = () => (dispatch) =>{
  dispatch({
    type: PHOTOS.UNMOUNT
  })
}
export const onPageChanged = (currentPage) => (dispatch) => {
  dispatch({
    type: PHOTOS.FETCHING
  })
  dispatch({
    type: PHOTOS.CURRENTPAGE,
    payload: currentPage
  })
}
export const setModalPhoto = (photo) => (dispatch) => {
  dispatch({
    type: PHOTOS.MODAL,
    payload: photo
  })
  dispatch({
    type: PHOTOS.SETMODAL,
  })
}
export const deleteModalPhoto = () => (dispatch) => {
  dispatch({
    type: PHOTOS.UNMODAL
  })
}
export const changeModalPhoto = (act) => (dispatch,getState) => {
  let array = getState().photosReducer.modalPhotos.slice()
  let oldPhoto = getState().photosReducer.modalPhoto
  let index = array.findIndex(item => item.id === oldPhoto.id)
  let result
  dispatch({
    type: PHOTOS.MODALLEFTTRUE
  })
  dispatch({
    type: PHOTOS.MODALRIGHTTRUE
  })
  if (act === "left") {
    result = array[index-1]
    if (array[index-2]) {
  dispatch({
    type: PHOTOS.MODALLEFTTRUE
  })
    }
    else{
      dispatch({
        type: PHOTOS.MODALLEFTFALSE
      })
    }
  }
  else {
    result = array[index+1]
    if (array[index+2]) {
      dispatch({
        type: PHOTOS.MODALRIGHTTRUE
      })
    }
    else{
      dispatch({
        type: PHOTOS.MODALRIGHTFALSE
      })
    }
  }

  dispatch({
    type: PHOTOS.CHANGEMODAL,
    payload: result
  })
}