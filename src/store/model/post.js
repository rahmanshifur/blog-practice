import { action, thunk } from "easy-peasy";
import Axios from 'axios'

const PostModel = {
    data: [],
    details: {},
    editData: {},
    getPost: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
        getState().data = res.data
    }),
    getDetails: thunk(async (action, payload, { getState }) => {
        let response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
        let author = await Axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
        let comments = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`)
        response.data.comments = comments.data
        response.data.author = author.data
        getState().details = response.data
    }),
    create: thunk(async (action, payload, { getState }) => {
        try {
            let response = await Axios.post('https://jsonplaceholder.typicode.com/posts', payload.data)
            getState().data.unshift(response.data)
            payload.successHandler()
        } catch (e) {
            console.log('error ', e.response)
        }
    }),
    edit: thunk(async (action, payload, { getState }) => {
        try {
            let edit = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}`)
            getState().editData = edit.data
        } catch (e) {
            console.log('error', e.edit)
        }
    }),
    resetEdit: action((state, payload) => {
        state.editData = {}
    }),
    update: thunk(async (action, payload, { getState }) => {
        let update = await Axios.put(`https://jsonplaceholder.typicode.com/posts/${payload.data.id}`, payload.data)
        let arr = getState().data.map(item => {
            if (item.id === update.data.id) {
                item = update.data
            }
            return item
        })
        getState().data = arr
        getState().editData = {}
    }),
    remove: thunk(async (action, payload, { getState }) => {
        try {
            await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${payload}`)
            let arr = getState().data.filter(item => item.id !== payload)
            getState().data = arr
        } catch (e) {
            console.log('error', e.response)
        }
    }),


}

export default PostModel
