
import { createStore } from "easy-peasy"
import PostModel from "./model/post"
import AuthorModel from "./model/author"
import AlbumModel from "./model/album"
import TodoModel from "./model/todo"



const store = createStore({
    todo: TodoModel,
    album: AlbumModel,
    author: AuthorModel,
    // photos: PhotosModel,
    post: PostModel,
})
export default store