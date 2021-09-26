import { useStoreActions, useStoreState } from 'easy-peasy'
import { useState, useEffect } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'


function AuthorUpdate({ addHandler }) {
    const [error, setError] = useState({})
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [suite, setSuite] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [catchPhrase, setCatchPhrase] = useState('')
    const [bs, setBs] = useState('')
    const [phone, setPhone] = useState('')

    const authorUpdate = useStoreActions(action => action.author.update)
    const editData = useStoreState(state => state.author.editData)

    useEffect(() => {
        setName(editData.name)
        setUsername(editData.username)
        setEmail(editData.email)
        setPhone(editData.phone)
        setStreet(editData.address.street)
        setSuite(editData.address.suite)
        setCity(editData.address.city)
        setZipcode(editData.address.zipcode)
        setCompanyName(editData.company.name)
        setCatchPhrase(editData.company.catchPhrase)
        setBs(editData.company.bs)
    }, [editData])



    const submitHandler = e => {
        e.preventDefault()
        if (!validation()) {
            return;
        }

        let obj = {
            id: editData.id,
            name: name,
            username: username,
            email: email,
            address: {
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode,
            },
            company: {
                name: companyName,
                catchPhrase: catchPhrase,
                bs: bs,
            },
            phone: phone,
        }

        authorUpdate({ data: obj })
    }

    const validation = () => {
        const error = {}

        if (!name) {
            error.name = 'The name field is required!'
        }
        if (!username) {
            error.username = 'The username field is required!'
        }
        if (!email) {
            error.email = 'The email field is required!'
        }
        if (!street) {
            error.street = 'The street field is required!'
        }
        if (!suite) {
            error.suite = 'The suite field is required!'
        }
        if (!city) {
            error.city = 'The city field is required!'
        }
        if (!zipcode) {
            error.zipcode = 'The zipcode field is required!'
        }
        if (!companyName) {
            error.companyName = 'The company name field is required!'
        }
        if (!catchPhrase) {
            error.catchPhrase = 'The catchPhrase field is required!'
        }
        if (!bs) {
            error.bs = 'The business field is required!'
        }
        if (!phone) {
            error.phone = 'The phone field is required!'
        }
        setError(error)

        return Object.keys(error).length === 0
    }



    return (
        <Row>
            <Col sm={3}>

            </Col>
            <Col sm={6} >
                <div >
                    <Form onSubmit={submitHandler} className='p-3  bg-dark rounded-3 '   >
                        <FormGroup>
                            <Label className='text-light'><b>Name :</b></Label>
                            <Input
                                className='my-2 rounded-pill h-25 '
                                type="text"
                                value={name}
                                placeholder='Enter name'
                                onChange={(e) => setName(e.target.value)}
                                invalid={error.name !== undefined}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className='text-light'><b>Username :</b></Label>
                            <Input
                                className='my-2 rounded-pill h-25'
                                type="text"
                                value={username}
                                placeholder='Enter username'
                                onChange={(e) => setUsername(e.target.value)}
                                invalid={error.username !== undefined}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label className='text-light'><b>Email :</b></Label>
                            <Input
                                className='my-2 rounded-pill h-25'
                                type="email"
                                value={email}
                                placeholder='Enter email'
                                onChange={(e) => setEmail(e.target.value)}
                                invalid={error.email !== undefined}
                            />
                        </FormGroup>
                        <FormGroup>
                            <h5 className="mb-0 text-light">Address: </h5>
                            <hr className="text-light m-0" />
                            <FormGroup>
                                <Label className='text-light'><b>Street :</b></Label>
                                <Input
                                    className='my-2 rounded-pill h-25'
                                    type="text"
                                    value={street}
                                    placeholder='Enter address'
                                    onChange={(e) => setStreet(e.target.value)}
                                    invalid={error.street !== undefined}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className='text-light'><b>Suite :</b></Label>
                                <Input
                                    type="text"
                                    value={suite}
                                    placeholder='Enter suite'
                                    onChange={(e) => setSuite(e.target.value)}
                                    invalid={error.suite !== undefined}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className='text-light'><b>City :</b></Label>
                                <Input
                                    className='my-2 rounded-pill h-25'
                                    type="text"
                                    value={city}
                                    placeholder='Enter city'
                                    onChange={(e) => setCity(e.target.value)}
                                    invalid={error.city !== undefined}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className='text-light'><b>Zipcode :</b></Label>
                                <Input
                                    className='my-2 rounded-pill h-25'
                                    type="text"
                                    value={zipcode}
                                    placeholder='Enter zipcode'
                                    onChange={(e) => setZipcode(e.target.value)}
                                    invalid={error.zipcode !== undefined}
                                />
                            </FormGroup>
                            <FormGroup>
                            </FormGroup>
                            <h5 className="mb-0 text-light">Company: </h5>
                            <hr className="text-light m-0" />
                            <FormGroup>
                                <Label className='text-light'><b>name:</b></Label>
                                <Input
                                    className='my-2 rounded-pill h-25'
                                    type="text"
                                    value={companyName}
                                    placeholder='Enter company name'
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    invalid={error.companyName !== undefined}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className='text-light'><b>Catch Phrase:</b></Label>
                                <Input
                                    className='my-2 rounded-pill h-25'
                                    type="text"
                                    value={catchPhrase}
                                    placeholder='Enter catchPhrase'
                                    onChange={(e) => setCatchPhrase(e.target.value)}
                                    invalid={error.catchPhrase !== undefined}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className='text-light'><b>Business :</b></Label>
                                <Input
                                    className='my-2 rounded-pill h-25'
                                    type="text"
                                    value={bs}
                                    placeholder='Enter bs'
                                    onChange={(e) => setBs(e.target.value)}
                                    invalid={error.bs !== undefined}
                                />
                            </FormGroup>
                        </FormGroup>
                        <Label className='text-light'><b>Contact:</b></Label>
                        <Input
                            className='my-2 rounded-pill h-25'
                            type="text"
                            value={phone}
                            placeholder='Enter phone'
                            onChange={(e) => setPhone(e.target.value)}
                            invalid={error.phone !== undefined}
                        />
                        <Button type="submit" color="success" className='ms-auto rounded-pill ' size='lg'>Update</Button>
                    </Form>
                </div>
            </Col>
            <Col sm={3}>

            </Col>
        </Row>
    )
}
export default AuthorUpdate