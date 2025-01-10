import { useState, useEffect } from "react"

function Test() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    //variation 1 :- Triggerd everytime on rendering 
    // useEffect( () => {
    //     alert("I will change on everything")
    // })    

    //variation 2 :- Triggered only once on rendering
    // useEffect( () => {
    //     alert("Only triggered once")
    // }, [])  

     //variation 3 :- Triggered only at starting and when count is changed
    // useEffect( () => {
    //     alert("Only triggered in starting and when count is changed ")
    // }, [count])      

    //variation 4 :- Triggered only at starting and when count or total is changed
    // useEffect( () => {
    //     alert("Only triggered in starting and when count or total is changed ")
    // }, [count, total])      

    //variation 5 :-  Triggered only at starting and when count is changed 
    // also clear function get triggered before count is updated 
    // useEffect( () => {
    //     alert("Count changed");

    //     return() => {
    //         alert('Count is unmounted from UI')
    //     }
    // }, [count])

    return (
        <>
            <h1> {count} </h1>
            <button onClick={() => {setCount(count+1)}}> Increment counter </button>
            <h1> {total} </h1>
            <button onClick={() => {setTotal(total+1)}}> Increment Total </button>
        </>
    )
}

export default Test