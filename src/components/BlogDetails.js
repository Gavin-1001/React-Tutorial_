import {useParams} from "react-router-dom";

const BlogDetails = () => {

    const {id} = useParams(); //allows us to grab route parameters from the route/url. In this case the :id

    return (
        <div className="blog-details">
            <h3>Blog Details - {id}</h3>
        </div>
    )

}


export default BlogDetails;