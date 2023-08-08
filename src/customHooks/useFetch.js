import {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //abort controller
        const abortController = new AbortController();

        setTimeout(() => { //the seTimeout simulates the isLoading conditional
            fetch(url, {signal: abortController.signal})
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource :(')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
            })
        }, 0.000001); //can add a timeout
        return () => abortController.abort(); //stops fetch when the user clicks off the page, while fetch is running
    }, [url]); //the url is a dependency, so whenever the url changes it will rerender the useEffect hook
    return {data, isLoading, error};
}

export default useFetch;