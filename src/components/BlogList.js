const BlogList = ({blogs, title, handleDeleteBlog}) => {

    // const blogs = props.blogs;
    // const title = props.title;
    //console.log(props, blogs)



    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => ( //singular blog refers to each item in blogs array
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDeleteBlog(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>

    )


}

export default BlogList;