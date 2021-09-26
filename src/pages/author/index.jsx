import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"
import { Button } from "reactstrap"
import AuthorCreate from "./create"
import ListItem from "./list-items"
import AuthorUpdate from "./update"

function Author() {
    const [isOpen, setIsOpen] = useState(false)

    const getAuthor = useStoreActions(action => action.author.getAuthor)
    const editData = useStoreState(state => state.author.editData)
    const resetEdit = useStoreActions(action => action.author.resetEdit)

    useEffect(() => {
        getAuthor()
    }, [getAuthor])



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
                {Object.keys(editData).length !== 0 ? <AuthorUpdate addHandler={addHandler} /> :
                    isOpen && <AuthorCreate addHandler={addHandler} isOpen={isOpen} />
                }
            </div>
            <div className="d-flex ms-auto">
                <h2>Author List :</h2>
                <Button className=" ms-auto" onClick={() => addHandler()}>{(Object.keys(editData).length !== 0 || isOpen) ? 'Close' : 'Add'}</Button>
            </div>
            <hr />
            <ListItem />
        </div>
    )
}

export default Author
