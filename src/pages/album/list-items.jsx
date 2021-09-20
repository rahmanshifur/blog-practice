import { useStoreState } from "easy-peasy"
import { Link } from "@reach/router"


function ListItem() {

    const albumData = useStoreState(state => state.album.data)

    return (
        <div>
            {albumData && albumData.length !== 0 && albumData.map((item, i) =>
                <div key={item.id}>
                    <h5>
                        <Link className="text-decoration-none text-dark " to={`/album/${item.id}/${item.title}`} >{++i}. {item.title}</Link>
                    </h5>
                </div>
            )}
        </div>
    )
}
export default ListItem