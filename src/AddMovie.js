import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext'

const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovie] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();

        setMovie(prevMovies => [...prevMovies, { name: name, price: price, id: name.length }]);
    }

    return (
        <div>
            <form onSubmit={addMovie}>
                <input type="text" name="name" value={name} onChange={updateName} />
                <input type="text" name="price" value={price} onChange={updatePrice} />
                <button>Ekle</button>
            </form>
        </div>
    );
}

export default AddMovie;