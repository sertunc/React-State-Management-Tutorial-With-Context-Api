import React from 'react';
import NavBar from './NavBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import { MovieProvider } from './MovieContext'

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieProvider>
          <NavBar />
          <AddMovie />
          <MovieList />
        </MovieProvider>
      </header>
    </div>
  );
}

export default App;
