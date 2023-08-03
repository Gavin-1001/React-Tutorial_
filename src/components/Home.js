import {useState} from "react";
import BlogList from "./BlogList";



const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipsum.....', author: 'me', id: '1'},
        {title: "My new website1", body: 'lorem ipsum.....', author: 'you', id: '2'},
        {title: "My new website2", body: 'lorem ipsum.....', author: 'us', id: '3'},
    ]);


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    );

}
export default Home;