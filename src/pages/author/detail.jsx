import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect } from 'react';
import { Link } from '@reach/router';
import { replace } from "../../util/helper";

function AuthorDetail(props) {
    const getDetail = useStoreActions(action => action.author.getDetail)
    const detail = useStoreState(state => state.author.detail)
    console.log(detail)

    useEffect(() => {
        getDetail(props.id)
    }, [props, getDetail])

    return (
        <div>
            {Object.keys(detail).length !== 0 &&
                <div>
                    <h3>Personal Information</h3>
                    <hr />
                    <h4><b>Name:</b> {detail.name}</h4>
                    <p><b>Username:</b> {detail.username}</p>
                    <p><b>Email:</b> {detail.email}</p>
                    <p><b>Phone Number:</b> {detail.phone}</p>
                    <p><b>Website:</b> <a href={`http://${detail.website}`} target="_blank">http://{detail.website}</a></p>

                    <hr />
                    <h4>Company Information :</h4>
                    <hr />
                    <h5><b>Name:</b> {detail.company.name}</h5>
                    <p><b>Business:</b> {detail.company.bs}</p>
                    <p><b>Catch Phrase:</b> {detail.company.catchPhrase}</p>

                    <hr />
                    <h4>Address :</h4>
                    <hr />
                    <p><b>City:</b> {detail.address.city}-{detail.address.zipcode}</p>
                    <p><b>Street:</b> {detail.address.street}</p>
                    <p><b>Suite:</b> {detail.address.suite}</p>
                    <p><b>Lat:</b> {detail.address.geo.lat}</p>
                    <p><b>Lng:</b> {detail.address.geo.lng}</p>
                    <hr />
                    <div>
                        <h3>Post :</h3>
                        <hr />
                        {detail.post && detail.post.length !== 0 && detail.post.map((item, i) =>
                            <h6 key={item.id}>
                                <Link className="text-dark" to={`/post/${item.id}/${replace(item.title)}`}>{++i}. {item.title}</Link>
                            </h6>
                        )}
                        <hr />
                        <div className="m-3">
                            <h4>Comments :</h4>
                            <hr />
                            {detail.comment && detail.comment.length !== 0 && detail.comment.map((com, i) =>
                                <div>
                                    <h6 key={com.id}>{++i}. {com.name}.</h6>
                                    <p>{com.body}.</p>
                                    <hr />
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3>Todos :</h3>
                        <hr />
                        {detail.todo && detail.todo.length !== 0 && detail.todo.map((item, i) =>
                            <h6 key={item.id}>{++i}. {item.title}</h6>
                        )}
                    </div>
                    <hr />
                    <div>
                        <h3>Album :</h3>
                        <hr />
                        {detail.album && detail.album.length !== 0 && detail.album.map((item, i) =>
                            <h6 key={item.id}>
                                <Link className="text-dark" to={`/album/${item.id}/${replace(item.title)}`}>{++i}. {item.title}</Link>
                            </h6>
                        )}
                    </div>
                </div>}
        </div>
    )
}
export default AuthorDetail