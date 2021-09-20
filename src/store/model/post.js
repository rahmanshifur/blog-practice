import { thunk } from "easy-peasy";
import Axios from 'axios'

const PostModel = {
    data: [],
    details: {},
    getPost: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
        getState().data = res.data
    }),
    getDetails: thunk(async (action, payload, { getState }) => {
        console.log(payload)
        let response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
        let author = await Axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
        let comments = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`)
        response.data.comments = comments.data
        response.data.author = author.data
        getState().details = response.data
    }),
}

export default PostModel
