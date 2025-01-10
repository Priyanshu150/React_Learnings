import React, { useState, useEffect } from "react";

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/')
            .then(repsonse => repsonse.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, []);

    return (
        <>
            { loading ? (
                <h1> Loading......</h1>
            ) : (
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )

            }
        </>
    )
}

export default DataFetcher;