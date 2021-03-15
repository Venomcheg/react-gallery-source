export const setUsers = (state) => {
  return state.usersReducer.users
}
export const setUsersIsFetching = (state) => {
  return state.usersReducer.isFetching
}
export const setAlbums = (state) => {
  return state.albumsReducer.albums
}
export const setAlbumsIsFetching = (state) => {
  return state.usersReducer.isFetching
}
export const setPhotos = (state) => {
  return state.photosReducer.photos
}
export const setPhotosIsFetching = (state) => {
  return state.photosReducer.isFetching
}
export const setTotalUsersCount = (state) => {
  return state.usersReducer.totalUsersCount
}
export const setTotalAlbumsCount = (state) => {
  return state.albumsReducer.totalAlbumsCount
}
export const setTotalPhotosCount = (state) => {
  return state.photosReducer.totalPhotosCount
}
export const setPageSize = (state) => {
  return state.paginationReducer.pageSize
}
export const setAlbumsCurrentPage = (state) => {
  return state.albumsReducer.currentPage
}
export const setUsersCurrentPage = (state) => {
  return state.usersReducer.currentPage
}
export const setPhotosCurrentPage = (state) => {
  return state.photosReducer.currentPage
}
export const setPhotoIsModal = (state) => {
  return state.photosReducer.isPhotoModal
}
export const setModalPhoto = (state) => {
  return state.photosReducer.modalPhoto
}
export const setModalArrowLeft = (state) => {
  return state.photosReducer.modalLeft
}
export const setModalArrowRight = (state) => {
  return state.photosReducer.modalRight
}