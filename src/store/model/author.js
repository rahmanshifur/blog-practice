
import { thunk, action } from 'easy-peasy';
import Axios from 'axios';

const AuthorModel = {
    data: [],
    detail: {},
    editData: {},
    getAuthor: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/users?_page=1&_limit=10')
        getState().data = res.data
    }),
    getDetail: thunk(async (action, payload, { getState }) => {
        let response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${payload}`)
        let post = await Axios.get(`https://jsonplaceholder.typicode.com/users/${payload}/posts`)
        let comment = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`)
        let todo = await Axios.get(`https://jsonplaceholder.typicode.com/users/${payload}/todos`)
        let album = await Axios.get(`https://jsonplaceholder.typicode.com/users/${payload}/albums`)

        response.data.post = post.data
        response.data.comment = comment.data
        response.data.todo = todo.data
        response.data.album = album.data


        getState().detail = response.data
    }),
    create: thunk(async (action, payload, { getState }) => {
        try {
            let response = await Axios.post('https://jsonplaceholder.typicode.com/users', payload.data)
            getState().data.unshift(response.data)
            payload.successHandler()
        } catch (e) {
            console.log('error', e.response)
        }
    }),
    edit: thunk(async (action, payload, { getState }) => {
        try {
            let response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${payload}`)
            getState().editData = response.data
        } catch (e) {
            console.log('error', e.response)
        }
    }),
    resetEdit: action((state, payload) => {
        state.editData = {}
    }),
    update: thunk(async (action, payload, { getState }) => {
        try {
            let res = await Axios.put(`https://jsonplaceholder.typicode.com/users/${payload.data.id}`, payload.data)
            let arr = getState().data.map(item => {
                if (item.id === res.data.id) {
                    item = res.data
                }
                return item
            })
            getState().data = arr
            getState().editData = {}
        } catch (e) {
            console.log('error', e.response)
        }
    }),
    remove: thunk(async (action, payload, { getState }) => {
        try {
            await Axios.delete(`https://jsonplaceholder.typicode.com/users/${payload}`)
            let arr = getState().data.filter(item => item.id !== payload)
            getState().data = arr
        } catch (e) {
            console.log('error', e.response)
        }
    }),

}

export default AuthorModel