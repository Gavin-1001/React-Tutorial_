import {useState} from "react";



const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipsum.....', author: 'me', id: '1'},
        {title: "My new website1", body: 'lorem ipsum.....', author: 'you', id: '2'},
        {title: "My new website2", body: 'lorem ipsum.....', author: 'us', id: '3'},
    ]);


    return (
        <div className="home">
            {blogs.map((blog) => ( //singular blog refers to each item in blogs array
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );

}
export default Home;