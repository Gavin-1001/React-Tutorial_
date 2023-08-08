import {useState} from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario'); //for select there has to be an initial value. The initial value will be shown when the form is loaded for the first time

    return(
        <div className="create">
            <h2>Add a new blog!</h2>
            <form>
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
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}
export default Create;