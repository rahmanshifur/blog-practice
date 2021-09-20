
import { createStore } from "easy-peasy"
import PhotosModel from "./model/photos"
import PostModel from "./model/post"
import AuthorModel from "./model/author"
import AlbumModel from "./model/album"

const store = createStore({
    album: AlbumModel,
    author: AuthorModel,
    // photos: PhotosModel,
    post: PostModel,
})
export default store