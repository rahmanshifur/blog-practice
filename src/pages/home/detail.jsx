
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';
import { Link } from '@reach/router';
import { replace } from '../../util/helper';

function PostDetail(props) {
    const getDetails = useStoreActions(action => action.post.getDetails)
    const detail = useStoreState(state => state.post.details)

    useEffect(() => {
        getDetails(props.id)
    }, [props, getDetails])


    return (
        <div>
            {Object.keys(detail).length !== 0 && <>
                <h2>{detail.title}</h2>
                <p>{detail.body}</p>
                <hr />
                <p>
                    <b>Author: </b>
                    <Link to={`/author/${detail.author.id}/${replace(detail.author.name)}`}>{detail.author.name}</Link>
                </p>
                <hr />

                <div className="comments m-3">
                    <h3>Comments</h3>
                    <hr />
                    {detail.comments && detail.comments.map((item, i) =>
                        <div keys={item.id}>
                            <h5>{++i}. {item.name}</h5>
                            <p>{item.body}</p>
                        </div>
                    )}
                </div>
            </>}
        </div>
    )
}

export default PostDetail