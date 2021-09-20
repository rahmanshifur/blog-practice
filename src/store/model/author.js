
import { thunk } from 'easy-peasy';
import Axios from 'axios';

const AuthorModel = {
    data: [],
    detail: {},
    getAuthor: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/users')
        getState().data = res.data
    }),
    getDetail: thunk(async (action, payload, { getState }) => {
        let response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${payload}`)
        getState().detail = response.data
    })

}

export default AuthorModel