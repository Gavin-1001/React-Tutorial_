import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./components/Create";

function App() {

    const title = "Welcome to the new blog"

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/create" element={<Create />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )

}

export default App;
