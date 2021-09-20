import { useStoreActions } from "easy-peasy"
import { useEffect } from "react"
import ListItem from "./list-items"



function Album() {

    const getAlbum = useStoreActions(action => action.album.getAlbum)

    useEffect(() => {
        getAlbum()
    }, [getAlbum])

    return (
        <div>
            <h2>Album :</h2>
            <hr />
            <ListItem />
        </div>
    )
}

export default Album