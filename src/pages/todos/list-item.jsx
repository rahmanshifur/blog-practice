import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from '@reach/router';
import { replace } from '../../util/helper';
import { Button } from 'reactstrap';

function ListItem() {

    const todoData = useStoreState(state => state.todo.data)
    const editHandler = useStoreActions(action => action.todo.edit)
    const removeHandler = useStoreActions(action => action.todo.remove)


    return (
        <div>
            {todoData && todoData.length !== 0 && todoData.map((item, i) =>
                <div key={item.id} className='d-flex justify-content-between'>
                    <div >
                        {console.log(item)}
                        <h5>
                            <Link className="text-decoration-none text-dark" to={`/author/${item.userId}/${replace(item.title)}`}>{++i}. {item.title} [{item.completed ? 'COMPLETED' : 'INCOMPLETE'}]</Link>
                        </h5 >
                    </div>
                    <div className='d-flex '>
                        {item.completed !== true &&
                            <>
                                <Button className='my-2' color='success' onClick={() => editHandler(item.id)}>Edit</Button>
                                <Button className='my-2 ms-2' color='danger' onClick={() => removeHandler(item.id)}>Delete</Button>
                            </>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListItem