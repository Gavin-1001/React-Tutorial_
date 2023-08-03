import {useState} from "react";
import BlogList from "./BlogList";



const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipsum.....', author: 'Mario', id: '1'},
        {title: "My new website1", body: 'lorem ipsum.....', author: 'Mario', id: '2'},
        {title: "My new website2", body: 'lorem ipsum.....', author: 'us', id: '3'},
    ]);


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="All Blogs"/>
             {/*Only want to filter Mario's blogs*/}
        </div>
    );

}
export default Home;