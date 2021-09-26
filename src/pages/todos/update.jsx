import { useStoreActions, useStoreState } from "easy-peasy"
import { useState, useEffect } from "react"
import { Button, FormGroup, Input, Label, Form, Row, Col } from "reactstrap"



function UpdateTodo() {
    const [error, setError] = useState({})
    const [title, setTitle] = useState('')
    // const [complete, setComplete] = useState('')

    const updateTodo = useStoreActions(action => action.todo.update)
    const editData = useStoreState(state => state.todo.editData)

    useEffect(() => {
        setTitle(editData.title)
    }, [editData])

    const submitHandler = e => {
        e.preventDefault();
        if (!validation()) {
            return;
        }
        let obj = {
            id: editData.id,
            title: title,
            // completed: complete,
        }

        updateTodo({ data: obj })
        // setTitle('')
    }

    const validation = () => {
        const error = {}

        if (!title) {
            error.title = 'The title is required!'
        }
        // if (!complete) {
        //     error.complete = 'The complete is required!'
        // }
        setError(error)

        return Object.keys(error).length === 0
    }

    return (
        <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
                <Form onSubmit={submitHandler} className='p-3 bg-dark rounded-3'>
                    <FormGroup>
                        <Label className='text-light'><b>Title: </b></Label>
                        <Input
                            className='my-2  h-25'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Enter title'
                            invalid={error.title !== undefined}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className='text-light'><b>Complete: </b></Label>
                        {/* <Input
                            className='my-2  h-25'
                            type="select"
                            value={complete}
                            onChange={(e) => setComplete(e.target.value)}
                            invalid={error.complete !== undefined}
                        >
                            <option value=''>Select Complete</option>
                            <option value='0'>false</option>
                            <option value='1'>true</option>
                        </Input> */}
                    </FormGroup>
                    <Button type="submit" className=" btn-success rounded-pill" size='lg'>Update</Button>
                </Form>
            </Col>
            <Col sm={2}></Col>
        </Row>
    )
}

export default UpdateTodo