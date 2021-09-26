import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect } from "react"
import { Card, CardImg, CardText, CardBody } from "reactstrap"


function AlbumDetails(props) {

    const getPhotos = useStoreActions(action => action.album.getPhotos)
    const photo = useStoreState(state => state.album.photos)

    useEffect(() => {
        getPhotos(props.id)
    }, [props, getPhotos])

    return (
        <div>
            <h3>Photos :</h3>
            <hr />
            {Object.keys(photo).length !== 0 && photo.map((item, i) =>

                <Card key={item.id} className=' m-1 p-4 float-start' style={{ width: '250px', height: '350px' }}>
                    <CardImg src={item.url} alt="Card image cap" />
                    <CardBody >
                        <CardText>{++i}. {item.title}</CardText>
                    </CardBody>
                </Card>

            )}
        </div>
    )
}

export default AlbumDetails