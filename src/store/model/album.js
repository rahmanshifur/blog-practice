
import { action, thunk } from 'easy-peasy';
import Axios from 'axios';

const AlbumModel = {
    data: [],
    photos: {},
    editData: {},
    getAlbum: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/albums?_page=1&_limit=10')
        getState().data = res.data
    }),
    getPhotos: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get(`https://jsonplaceholder.typicode.com/albums/${payload}/photos`)
        getState().photos = res.data
    }),
    create: thunk(async (action, payload, { getState }) => {
        try {
            let res = await Axios.post('https://jsonplaceholder.typicode.com/albums', payload.data)
            console.log(res.data)
            getState().data.unshift(res.data)
            payload.successHandler()

        } catch (e) {
            console.log('error', e.response)
        }
    }),
    edit: thunk(async (action, payload, { getState }) => {
        try {
            let res = await Axios.get(`https://jsonplaceholder.typicode.com/albums/${payload}`)
            getState().editData = res.data
        } catch (e) {
            console.log('error', e)
        }
    }),
    resetEdit: action((state, payload) => {
        state.editData = {}
    }),
    update: thunk(async (action, payload, { getState }) => {
        try {
            let res = await Axios.put(`https://jsonplaceholder.typicode.com/albums/${payload.data.id}`, payload.data)
            let arr = getState().data.map(item => {
                if (item.id === res.data.id) {
                    item.title = res.data.data
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
            await Axios.delete(`https://jsonplaceholder.typicode.com/albums/${payload.id}`)
            let arr = getState().data.filter(item => item.id !== payload)
            getState().data = arr
        } catch (e) {
            console.log('error', e.response)
        }
    })
}

export default AlbumModel