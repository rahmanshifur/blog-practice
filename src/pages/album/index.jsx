import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"
import { Button } from "reactstrap";
import ListItem from "./list-items"
import AlbumCreate from './create';
import AlbumUpdate from './update';



function Album() {
    const [isOpen, setIsOpen] = useState(false)

    const getAlbum = useStoreActions(action => action.album.getAlbum)
    const editData = useStoreState(state => state.album.editData)
    const resetEdit = useStoreActions(action => action.album.resetEdit)

    useEffect(() => {
        getAlbum()
    }, [getAlbum])

    const addHandler = () => {
        resetEdit()
        if (Object.keys(editData).length !== 0) {
            setIsOpen(false)
        } else {

            setIsOpen(!isOpen)
        }
    }

    return (
        <div>
            <div>
                {Object.keys(editData).length !== 0 ? <AlbumUpdate addHandler={addHandler} /> :
                    isOpen && <AlbumCreate addHandler={addHandler} isOpen={isOpen} />
                }
            </div>
            <div className='d-flex justify-content-between'>
                <h2>Album :</h2>
                <Button className=" ms-auto" onClick={() => addHandler()}>{(Object.keys(editData).length !== 0 || isOpen) ? 'Close' : 'Add'}</Button>
            </div>
            <hr />
            <ListItem />
        </div>
    )
}
export default Album