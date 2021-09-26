import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'


function UpdatePost({ addHandler }) {
    const [error, setError] = useState({})
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const updatePost = useStoreActions(action => action.post.update)
    const editData = useStoreState(state => state.post.editData)

    useEffect(() => {
        setTitle(editData.title)
        setBody(editData.body)
    }, [editData])


    const submitHandler = e => {
        e.preventDefault()

        if (!validation()) {
            return
        }

        let obj = {
            id: editData.id,
            title: title,
            body: body,
        }
        updatePost({ data: obj })

    }

    const validation = () => {
        const error = {}

        if (!title) {
            error.title = 'The title is required!'
        }
        if (!body) {
            error.body = 'The body is required!'
        }
        setError(error)

        return Object.keys(error).length === 0
    }




    return (
        <div>
            <Form onSubmit={submitHandler} className='p-3  bg-dark rounded-3'>
                <FormGroup>
                    <Label className='text-light'> <b>Title: </b></Label>
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
                    <Label className='text-light'> <b>body: </b></Label>
                    <Input
                        className='my-2  h-25'
                        type="textarea"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder='Enter body'
                        invalid={error.body !== undefined}
                    />
                </FormGroup>
                <Button type="submit" color="success" className=" rounded-pill" size='lg'>Update</Button>
            </Form>
        </div>
    )
}
export default UpdatePost