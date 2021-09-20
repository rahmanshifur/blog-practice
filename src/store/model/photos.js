
import { thunk } from 'easy-peasy';
import Axios from 'axios';

const PhotosModel = {
    data: [],
    details: {},
    getPhotos: thunk(async (action, payload, { getState }) => {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/photos')
        getState().data = res.data
    })
}

export default PhotosModel