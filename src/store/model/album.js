
import { thunk } from 'easy-peasy';
import Axios from 'axios';

const AlbumModel = {
    data: [],
    photos: [],
    getAlbum: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/albums')
        getState().data = res.data
    }),
    getPhotos: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get(`https://jsonplaceholder.typicode.com/albums/${payload}/photos`)
        getState().photos = res.data
    }),
}

export default AlbumModel