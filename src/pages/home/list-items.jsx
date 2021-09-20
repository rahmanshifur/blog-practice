import { useStoreState, useStoreActions } from "easy-peasy"
import { Link } from '@reach/router';

function ListItem() {

    const postData = useStoreState(state => state.post.data)

    return (
        <div>
            {postData && postData.length !== 0 && postData.map((item, i) =>
                <div key={item.id}>

                    <h4>
                        <Link className="text-decoration-none text-dark" to={`/post/${item.id}/${item.title}`}>{++i}. {item.title}</Link>
                    </h4>
                    <p>{item.body}</p>
                </div>)}
        </div>
    )
}
export default ListItem