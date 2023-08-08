import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => { //the seTimeout simulates the isLoading conditional
            fetch(url)
                .then(res => {
                    console.log(res)
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource :(')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                }).catch(err => {
                setIsLoading(false);
                setError(err.message);

            })
        }, 500); //can add a timeout
    }, [url]); //the url is a dependency, so whenever the url changes it will rerender the useEffect hook
    return {data, isLoading, error};
}

export default useFetch;