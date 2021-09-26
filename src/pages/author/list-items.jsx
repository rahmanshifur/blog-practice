import { useStoreState, useStoreActions } from "easy-peasy"
import { Link } from '@reach/router'
import { replace } from "../../util/helper"



function ListItem() {


    const authData = useStoreState(state => state.author.data)
    const editHandler = useStoreActions(action => action.author.edit)
    const deleteHandler = useStoreActions(action => action.author.remove)

    return (
        <div className='author' >
            {authData && authData !== 0 && authData.map((item, i) =>
                <div key={item.id} >
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h5>
                                <Link className="text-decoration-none text-dark" to={`/author/${item.id}/${replace(item.name)}`}>{++i}. {item.name}</Link>
                            </h5>
                            <p> <b>Username:</b>{item.username}</p>
                            <p><b>Email: </b>{item.email}</p>
                            <p> <b> City :</b>{item.address.city}</p>
                            <p><b>Phone Number :</b>{item.phone}</p>
                            <hr />
                        </div>
                        <div>
                            <button
                                className="btn btn-success"
                                style={{ height: 50 }}
                                onClick={() => editHandler(item.id)}
                            >Edit</button>
                            <button
                                className="btn btn-danger ms-3"
                                style={{ height: 50 }}
                                onClick={() => deleteHandler(item.id)}
                            >Delete</button>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default ListItem