import {Link} from "react-router-dom";

const PageNotFound = () => {

    return (
        <div className="container">
            <h2>404 - Page Not Found</h2>
            <Link to={"/"}>Back to the homepage</Link>
        </div>
    )
}

export default PageNotFound;