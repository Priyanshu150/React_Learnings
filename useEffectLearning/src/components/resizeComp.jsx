import React, {useState, useEffect} from "react";

function ResizeComp(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect( () => {
       const handleResize = () => setWindowWidth(window.innerWidth);
       window.addEventListener('resize', handleResize);

       return () => {
        console.log('removed');
        window.removeEventListener('resize',handleResize);
       }

    }, []);

    return (
        <div>
            <h1> Window Size : {windowWidth} </h1>
        </div>
    );
}

export default ResizeComp;