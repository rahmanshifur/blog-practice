import { useStoreActions } from "easy-peasy"
import { useState } from "react"
import { Button, Form, FormGroup, Input, Label, } from 'reactstrap'


function CreatePost({ addHandler }) {
    const [error, setError] = useState({})
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const createPost = useStoreActions(action => action.post.create)

    const submitHandler = e => {
        e.preventDefault()

        if (!validation()) {
            return
        }

        let obj = {
            title: title,
            body: body,
        }
        createPost({ data: obj, successHandler })

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

    const successHandler = () => {
        setTitle('')
        setBody('')
        addHandler()
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
                <Button type="submit" color="primary" className=" rounded-pill" size='lg'>Save</Button>
            </Form>
        </div>
    )
}
export default CreatePost