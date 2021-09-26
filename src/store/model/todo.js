import { action, thunk } from "easy-peasy";
import Axios from 'axios';

const TodoModel = {
    data: [],
    details: {},
    editData: {},
    getTodo: thunk(async (action, payload, { getState }) => {
        let response = await Axios.get('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10')
        getState().data = response.data
    }),
    create: thunk(async (action, payload, { getState }) => {
        try {
            let response = await Axios.post('https://jsonplaceholder.typicode.com/todos', payload.data)
            console.log(response.data)
            getState().data.unshift(response.data)
            payload.successHandler()
        } catch (e) {
            console.log('error ', e.response)
        }
    }),
    edit: thunk(async (action, payload, { getState }) => {
        try {
            let response = await Axios.get(`https://jsonplaceholder.typicode.com/todos/${payload}`)
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
            let response = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.data.id}`, payload.data)
            let arr = getState().data.map(item => {
                if (item.id === response.data.id) {
                    item = response.data
                }
                return item
            })
            console.log(arr)
            getState().data = arr
            getState().editData = {}
        } catch (e) {
            console.log('error', e.response)
        }
    }),
    remove: thunk(async (action, payload, { getState }) => {
        try {
            await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${payload}`)
            let arr = getState().data.filter(item => item.id !== payload)
            getState().data = arr
        } catch (e) {
            console.log('error', e.response)
        }
    })
}
export default TodoModel