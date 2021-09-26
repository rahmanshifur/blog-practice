import { useStoreActions } from "easy-peasy"
import { useState } from "react"
import { Button, FormGroup, Input, Label, Form, Row, Col } from "reactstrap"



function AlbumCreate({ addHandler }) {
    const [error, setError] = useState({})
    const [title, setTitle] = useState('')

    const albumCreate = useStoreActions(action => action.album.create)

    const submitHandler = e => {
        e.preventDefault();
        if (!validation()) {
            return;
        }
        let obj = { title: title }

        albumCreate({ data: obj, successHandler })

    }

    const successHandler = () => {
        setTitle('')
        addHandler()
    }

    const validation = () => {
        const error = {}

        if (!title) {
            error.title = 'The title is required!'
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
                    <Button type="submit" className=" rounded-pill" size='lg'>Save</Button>
                </Form>
            </Col>
            <Col sm={2}></Col>
        </Row>
    )
}

export default AlbumCreate