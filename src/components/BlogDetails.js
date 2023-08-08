import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {

    const {id} = useParams(); //allows us to grab route parameters from the route/url. In this case the :id
    const {data: blog, error, isLoading} = useFetch('http://localhost:8000/blogs/'+id); //using the useFetch Hook to get these three properties from useFetch
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs'+blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("BLOG DELETED")
            navigate('/')
        })

    }

    return (
        <div className="blog-details">
            {isLoading && <div>Still Loading....</div>}
            {error && <div>{error}</div>}

            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete blog</button>
                </article>
            )}
        </div>
    )

}


export default BlogDetails;