import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect } from 'react';

function AuthorDetail(props) {
    const getDetail = useStoreActions(action => action.author.getDetail)
    const detail = useStoreState(state => state.author.detail)


    useEffect(() => {
        getDetail(props.id)
    }, [props, getDetail])

    return (
        <div>
            {Object.keys(detail).length !== 0 && <div>
                <h3>Personal Information</h3>
                <hr />
                <h4><b>Name:</b> {detail.name}</h4>
                <p><b>Username:</b> {detail.username}</p>
                <p><b>Email:</b> {detail.email}</p>
                <p><b>Phone Number:</b> {detail.phone}</p>
                <p><b>Website:</b> <a href={`http://${detail.website}`} target="_blank">http://{detail.website}</a></p>

                <hr />
                <h3>Company Information</h3>
                <h4><b>Name:</b> {detail.company.name}</h4>
                <p><b>Business:</b> {detail.company.bs}</p>
                <p><b>Catch Phrase:</b> {detail.company.catchPhrase}</p>

                <hr />
                <h3>Address</h3>
                <p><b>City:</b> {detail.address.city}-{detail.address.zipcode}</p>
                <p><b>Street:</b> {detail.address.street}</p>
                <p><b>Suite:</b> {detail.address.suite}</p>
                <p><b>Lat:</b> {detail.address.geo.lat}</p>
                <p><b>Lng:</b> {detail.address.geo.lng}</p>
            </div>}
        </div>
    )
}
export default AuthorDetail