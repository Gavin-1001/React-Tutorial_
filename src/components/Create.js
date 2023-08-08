import {useState} from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario'); //for select there has to be an initial value. The initial value will be shown when the form is loaded for the first time
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const blog = {title, body, author}; //blog object
        console.log(blog)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog) //turn json object into a string
        }).then(() => {
            console.log("New blog added.");
            setIsLoading(false);
        })
    }

    return(
        <div className="create">
            <h2>Add a new blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Blog body: </label>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                />

                <label>Blog Author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Add blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}
export default Create;