import {PHOTOS} from "../../constants";
const initialState = {
  totalPhotosCount: 50,
  currentPage: 1,
  isFetching: true,
  isPhotoModal: false,
  modalRight: true,
  modalLeft:true,
  modalPhoto: {},
  modalPhotos: {}
}

const photosReducer = (state= initialState, action) => {
  switch (action.type) {
    case PHOTOS.SET:
      return {...state,photos: action.payload.photos, modalPhotos: action.payload.modalPhotos}
    case PHOTOS.FETCHING:
      return {...state, isFetching: true}
    case PHOTOS.NOTFETCHING:
      return {...state, isFetching: false}
    case PHOTOS.UNMOUNT:
      return initialState
    case PHOTOS.CURRENTPAGE:
      return {...state, currentPage: action.payload}
    case PHOTOS.SETMODAL:
      return {...state, isPhotoModal: true}
    case PHOTOS.MODAL:
      return {...state, modalPhoto: action.payload}
      case PHOTOS.UNMODAL:
      return {...state, modalPhoto: {}, isPhotoModal: false}
    case PHOTOS.CHANGEMODAL:
      return {...state, modalPhoto: action.payload}
    case PHOTOS.MODALLEFTFALSE:
      return {...state, modalLeft: false}
    case PHOTOS.MODALLEFTTRUE:
      return {...state, modalLeft: true}
    case PHOTOS.MODALRIGHTFALSE:
      return {...state, modalRight: false}
    case PHOTOS.MODALRIGHTTRUE:
      return {...state, modalRight: true}
      default:
      return state
  }
}
export default photosReducer