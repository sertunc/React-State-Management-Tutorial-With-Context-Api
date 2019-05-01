import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovie] = useState([
        {
            name: 'Yüzüklerin Efendisi',
            price: '10 TL',
            id: 1
        },
        {
            name: 'Zamanda Aşk',
            price: '20 TL',
            id: 2
        },
        {
            name: 'Babam ve Oğlum',
            price: '30 TL',
            id: 3
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovie]}>
            {props.children}
        </MovieContext.Provider>
    );
}