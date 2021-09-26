import { Link } from "@reach/router"


function Navigator() {
    return (
        <div className="navigator">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/album'>Album</Link>
                </li>
                <li>
                    <Link to='/todo'>Todo</Link>
                </li>
                <li>
                    <Link to='/author'>Author</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigator