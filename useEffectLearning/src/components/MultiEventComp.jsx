import React, {useState, useEffect} from "react";

function MultiEventComp(){
    const [count, setCount] = useState(0);
    const [seconds, setSecond] = useState(0);

    useEffect( () => {
        console.log('Count changed:', count)
    }, [count]);

    useEffect( () => {
        const intervalId = setInterval(() => {
            setSecond(prevSeconds => prevSeconds + 1);
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <h1> Count : {count} </h1>
            <button onClick={ () => setCount(count + 1)}> Increment Count</button>
            <h2> Seconds : {seconds} </h2>
        </>
    )
}

export default MultiEventComp;