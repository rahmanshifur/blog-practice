import { useStoreState, useStoreActions } from "easy-peasy"
import { Link } from "@reach/router"
import { replace } from "../../util/helper"
import { Button } from "reactstrap"


function ListItem() {

    const albumData = useStoreState(state => state.album.data)
    const editHandler = useStoreActions(action => action.album.edit)
    const removeHandler = useStoreActions(action => action.album.remove)

    return (
        <div>
            {albumData && albumData.length !== 0 && albumData.map((item, i) =>
                <div key={item.id}>
                    <div className="d-flex justify-content-between my-2" >
                        <h5>
                            <Link className="text-decoration-none text-dark " to={`/album/${item.id}/${replace(item.title)}`} >{++i}. {item.title}</Link>
                        </h5>
                        <div>
                            <Button className='my-2' color='success' onClick={() => editHandler(item.id)}>Edit</Button>
                            <Button className='ms-2' color='danger' onClick={() => removeHandler(item.id)}>Delete</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ListItem