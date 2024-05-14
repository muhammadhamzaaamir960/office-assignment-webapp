'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RandomDataPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/randomData')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <h1>Random Data</h1>
            <p>Number: {data.number}</p>
            <p>Text: {data.text}</p>
        </div>
    );
}
