import React, { useContext } from 'react';
import { MovieContext } from './MovieContext'

const NavBar = () => {

    const [movies, setMovie] = useContext(MovieContext);

    return (
        <div>
            <p>Film Sayısı: {movies.length}</p>
        </div>
    );
}

export default NavBar;