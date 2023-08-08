import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../customHooks/useFetch";

const Home = () => {
    //destructuring the array from useFetch the return

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')




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