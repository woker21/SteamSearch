import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://rickandmortyapi.com/api/character/41');
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h2>{data.name}</h2>
                    <img src={data.image} alt={data.name} />
                    <p>Status: {data.status}</p>
                    <p>Species: {data.species}</p>
                    <p>Gender: {data.gender}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Character;



//steamsearch-10621