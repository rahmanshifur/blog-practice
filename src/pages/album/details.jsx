import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect } from "react"


function AlbumDetails(props) {

    const getPhotos = useStoreActions(action => action.album.getPhotos)
    const photo = useStoreState(state => state.album.photos)

    useEffect(() => {
        getPhotos(props.id)
    }, [props, getPhotos])

    return (
        <div>
            <h3>Photos :</h3>
            <hr />
            {photo && photo.length !== 0 && photo.map((item, i) =>

                <div key={item.id}>
                    <h5>{++i}. {item.title}</h5>
                    <img src={item.url} height='150' alt="" />
                </div>
            )}
        </div>
    )
}

export default AlbumDetails