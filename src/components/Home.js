import {useState} from "react";



const Home = () => {

//    let name = 'mario';
   const [name, setName] = useState('mario');
   const [age, setAge] = useState(25);

    const handleClick = () => {
        //name='luigi';
        setName('luigi');
        setAge(30);
    }

    return (
        <div className="home">
            <h3>Homepage</h3>
            <p>{name} is {age} years </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );

}
export default Home;