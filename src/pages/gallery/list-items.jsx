import { useStoreState } from "easy-peasy"
import { Link } from '@reach/router';

function ListItem() {

    const photosData = useStoreState(state => state.photos.data)

    return (
        <div>
            {photosData && photosData !== 0 && photosData.map((item, i) =>
                <div key={item.id}>
                    <h4>
                        <Link to={`/album/${item.id}/${item.title}`}>{++i}. {item.title}</Link>
                    </h4>
                    <img src={item.thumbnailUrl} alt="photos" />
                </div>)}
        </div>
    )
}

export default ListItem