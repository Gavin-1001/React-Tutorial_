import {useEffect, useState} from "react";
import BlogList from "./BlogList";



const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipsum.....', author: 'Mario', id: '1'},
        {title: "My new website1", body: 'lorem ipsum.....', author: 'Mario', id: '2'},
        {title: "My new website2", body: 'lorem ipsum.....', author: 'us', id: '3'},
    ]);

    const handleDeleteBlog = (id) => {
        //newBlogs filters the current array of blogs and when the button is pressed it will iterate through the array of blogs
        //id of blog that was to be deleted will not be filtered into the newBlogs variable, then you set the newBlogs as the setBlogs
        const newBlogs = blogs.filter(blog => blog.id !== id);

        setBlogs(newBlogs);

    }

    useEffect(() => {
        //the useEffect function ()=> will run everytime there is a rerender on the webpage,
        //once initially when the component loads, and then anytime after when the data changes.
        // best used for fetching data
        console.log("use effect ran");
        console.log(blogs)
    }, []);


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDeleteBlog={handleDeleteBlog}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="All Blogs"/>
             {/*Only want to filter Mario's blogs*/}
        </div>
    );

}
export default Home;