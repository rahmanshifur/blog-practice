import { useStoreActions, useStoreState } from "easy-peasy"
import { Link } from '@reach/router';
import { replace } from "../../util/helper";
import { Button } from "reactstrap";

function ListItem() {

    const postData = useStoreState(state => state.post.data)
    const editHandler = useStoreActions(action => action.post.edit)
    const removeHandler = useStoreActions(action => action.post.remove)

    return (
        <div>
            {postData && postData.length !== 0 && postData.map((item, i) =>
                <div key={item.id}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4>
                                <Link className="text-decoration-none text-dark" to={`/post/${item.id}/${replace(item.title)}`}>{++i}. {item.title}</Link>
                            </h4>
                            <p>{item.body}</p>
                        </div>
                        <div className="d-flex ">
                            <Button className='mx-2 h-50 btn-success' onClick={() => editHandler(item.id)}>Edit</Button>
                            <Button className='h-50 btn-danger' onClick={() => removeHandler(item.id)}>Delete</Button>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
export default ListItem