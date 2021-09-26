import { useStoreActions, useStoreState } from "easy-peasy"
import { Button } from 'reactstrap'
import { useEffect, useState } from "react"
import CreatePost from "./create"
import ListItem from "./list-items"
import UpdatePost from "./update"

function Home() {

    const [isOpen, setIsOpen] = useState(false)


    const getPost = useStoreActions(action => action.post.getPost)
    const editData = useStoreState(state => state.post.editData)
    const resetEdit = useStoreActions(action => action.post.resetEdit)

    useEffect(() => {
        getPost()
    }, [getPost])


    const addHandler = () => {
        resetEdit()
        if (Object.keys(editData).length !== 0) {
            setIsOpen(false)
        } else {

            setIsOpen(!isOpen)
        }
    }

    return (
        <div className="post container">
            <row className='row'>
                <div className="col-sm-2">

                </div>
                <div className="col-md-8">
                    <div>

                        {Object.keys(editData).length !== 0 ? <UpdatePost addHandler={addHandler} /> :
                            isOpen && <CreatePost addHandler={addHandler} />}
                    </div>
                    <div className='d-flex mt-3'>
                        <h2 className='text-center'>Hello Post</h2>
                        <Button className=" ms-auto" onClick={() => addHandler()}>{(Object.keys(editData).length !== 0 || isOpen) ? "Close" : "Add"}</Button>
                    </div>
                    <hr />
                    <ListItem />
                </div>
                <div className="col-sm-2">

                </div>
            </row>
        </div>
    )
}

export default Home