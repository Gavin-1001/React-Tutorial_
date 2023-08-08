import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import PageNotFound from "./components/Pages/PageNotFound";


function App() {

    const title = "Welcome to the new blog"

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/create" element={<Create />} />

                        <Route path="/blogs/:id" element={<BlogDetails />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>

                </div>
            </div>
        </Router>
    )

}

export default App;
