import React, {useState, useEffect} from "react";

function TimerComp(){
    const [seconds, setSeconds] = useState(0);

    useEffect( () => {
        console.log('Running');
        const intervalId = setInterval( () => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            <h1> Seconds : {seconds} </h1>
        </div>
    );
}

export default TimerComp;