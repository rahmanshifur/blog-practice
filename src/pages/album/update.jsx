import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"
import { Button, FormGroup, Input, Label, Form, Row, Col } from "reactstrap"



function AlbumUpdate() {
    const [error, setError] = useState({})
    const [title, setTitle] = useState('')

    const updateAlbum = useStoreActions(action => action.album.update)
    const editData = useStoreState(state => state.album.editData)

    useEffect(() => {
        setTitle(editData.title)
    }, [editData])

    const submitHandler = e => {
        e.preventDefault();
        if (!validation) {
            return;
        }

        let obj = {
            id: editData.id,
            data: title
        }

        updateAlbum({ data: obj })
        // setTitle('')
    }

    const validation = () => {
        const error = {}

        if (!title) {
            error.title = 'The title field is required!'
        }
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
                    <Button type="submit" className=" btn-success rounded-pill" size='lg'>Update</Button>
                </Form>
            </Col>
            <Col sm={2}></Col>
        </Row>
    )
}

export default AlbumUpdate