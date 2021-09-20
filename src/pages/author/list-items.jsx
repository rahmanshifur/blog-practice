import { useStoreState } from "easy-peasy"
import { Link } from '@reach/router'


function ListItem() {

    const authData = useStoreState(state => state.author.data)

    return (
        <div className='author' >
            {authData && authData !== 0 && authData.map((item, i) =>
                <div key={item.id} >
                    <h5>
                        <Link className="text-decoration-none text-dark" to={`/author/${item.id}/${item.name}`}>{++i}. {item.name}</Link>
                    </h5>
                    <p> <b>Username:</b>{item.username}</p>
                    <p><b>Email: </b>{item.email}</p>
                    <p> <b> City :</b>{item.address.city}</p>
                    <p><b>Phone Number :</b>{item.phone}</p>
                    <hr />

                </div>)}
        </div>
    )
}

export default ListItem