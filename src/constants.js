export const baseURL = 'https://jsonplaceholder.typicode.com/'
const users = "USERS_"
const albums = "ALBUMS_"
const photos = "PHOTOS_"
const pagination = "PAGINATION_"
export const USERS = {
  FETCHING: users + "FETCHING",
  NOTFETCHING: users + "NOTFETCHING",
  SET: users + "SET",
  CURRENTPAGE: users + "CURRENTPAGE"
}
export const ALBUMS = {
  FETCHING: users + "FETCHING",
  NOTFETCHING: users + "NOTFETCHING",
  SET: albums + "SET",
  UNMOUNT: albums + "UNMOUNT",
  CURRENTPAGE: albums + "CURRENTPAGE"
}
export const PHOTOS = {
  FETCHING: users + "FETCHING",
  NOTFETCHING: users + "NOTFETCHING",
  SET: photos + "SET",
  COUNT: photos + "COUNT",
  UNMOUNT: photos + "UNMOUNT",
  CURRENTPAGE: photos + "CURRENTPAGE",
  SETMODAL: photos + "SETMODAL",
  MODAL: photos + "MODAL",
  UNMODAL: photos + "UNMODAL",
  CHANGEMODAL: photos + "CHANGEMODAL",
  MODALRIGHTTRUE: photos + "MODALRIGHTTRUE",
  MODALRIGHTFALSE: photos + "MODALRIGHTFALSE",
  MODALLEFTTRUE: photos + "MODALLEFTTRUE",
  MODALLEFTFALSE: photos + "MODALLEFTFALSE"
}
export const PAGINATION = {
  CURRENTPAGE: pagination + "CURRENTPAGE",
  UNMOUNT: pagination + "UNMOUNT"
}
