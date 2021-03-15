import {baseURL} from "../constants";

const baseAPI = async (customUrl="",baseUrl = baseURL) =>{
  const response = await fetch(baseUrl+customUrl)
  return await response.json()
}

export const usersAPI = {
   getUsers(currentPage, pageSize) {
    return baseAPI(`users?_page=${currentPage}&_limit=${pageSize}`)
  },
}
export const albumsAPI = {
  getAlbums(id, currentPage, pageSize) {
    return baseAPI(`users/${id}/albums?_page=${currentPage}&_limit=${pageSize}`)
  }
}
export const photosAPI = {
  getAllPhotos(id){
    return baseAPI(`albums/${id}/photos`)
},
  getPhotos(id, currentPage, pageSize) {
    return baseAPI(`albums/${id}/photos?_page=${currentPage}&_limit=${pageSize}`)
  }
}