import { useStoreActions } from "easy-peasy"
import { useEffect } from "react"
import ListItem from "./list-items"

function Author() {

    const getAuthor = useStoreActions(action => action.author.getAuthor)

    useEffect(() => {
        getAuthor()
    }, [])

    return (
        <div>
            <h2>Author List :</h2>
            <hr />
            <ListItem />
        </div>
    )
}

export default Author
