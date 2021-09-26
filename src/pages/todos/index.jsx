import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import CreateTodo from './create';
import ListItem from './list-item';
import UpdateTodo from './update';


function Todo() {

    const [isOpen, setIsOpen] = useState(false)

    const getTodo = useStoreActions(action => action.todo.getTodo)
    const editData = useStoreState(state => state.todo.editData)
    const resetEdit = useStoreActions(action => action.todo.resetEdit)


    useEffect(() => {
        getTodo()
        setIsOpen(Object.keys(editData).length !== 0)
    }, [getTodo, setIsOpen])

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
                {Object.keys(editData).length !== 0 ? <UpdateTodo /> :
                    isOpen && <CreateTodo addHandler={addHandler} />}
            </div>
            <div className='d-flex justify-content-between'>
                <h2>Todos</h2>
                <Button color='dark' onClick={() => addHandler()}>{(Object.keys(editData).length !== 0 || isOpen) ? 'Close' : 'Add'}</Button>
            </div>
            <hr />
            <ListItem />
        </div>
    )
}

export default Todo