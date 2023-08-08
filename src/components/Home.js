import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    useEffect(() => {
        setTimeout(() => { //the seTimeout simulates the isLoading conditional
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            })
        }, 1000);
    }, [])


    return (
        <div className="home">
            {/*{blogs && <BlogList blogs={blogs} />}*/}
            {isLoading && <div>Loading...</div>}
            {blogs &&<BlogList blogs={blogs} title="All Blogs!"  /> } {/*Conditional template*/}
        </div>
    )
}

//npx json-server --watch data/db.json --port 8000

export default Home;