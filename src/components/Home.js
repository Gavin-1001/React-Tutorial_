const Home = () => {

    const handleClick = () => {
        console.log("HEllo")
    }

    const handleClickAgain = (name, e) => {
        console.log("hello "+name, e.target);
    }

    return (
        <div className="home">
            <h3>Homepage</h3>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('myName', e)}>Click again</button>
        </div>
    );

}
export default Home;