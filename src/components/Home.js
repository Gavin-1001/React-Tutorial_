import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => { //the seTimeout simulates the isLoading conditional
        fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource :(')
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);

        })
        }, 500); //can add a timeout
    }, [])


    return (
        <div className="home">
            {/*{blogs && <BlogList blogs={blogs} />}*/}
            {error && <div>{error} </div>}
            {isLoading && <div>Loading...</div>}
            {blogs &&<BlogList blogs={blogs} title="All Blogs!"  /> } {/*Conditional template*/}
        </div>
    )
}

//npx json-server --watch data/db.json --port 8000

export default Home;