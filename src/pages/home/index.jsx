import { useStoreActions } from "easy-peasy"
import { useEffect } from "react"
import ListItem from "./list-items"

function Home() {

    const getPost = useStoreActions(action => action.post.getPost)


    useEffect(() => {
        getPost()
    }, [getPost])

    return (
        <div className="post container">
            <row className='row'>
                <div className="col-sm-2">

                </div>
                <div className="col-md-8">
                    <h2 className='text-center'>Hello Post</h2>
                    <ListItem />
                </div>
                <div className="col-sm-2">

                </div>
            </row>
        </div>
    )
}

export default Home