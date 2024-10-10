import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [selectedMovie, setSelectedMovie] = useState('');

    const movies = [
        'Inception',
        'The Dark Knight',
        'Interstellar',
        'Parasite',
    ];

    const handleMovieSelect = (event) => {
        setSelectedMovie(event.target.value);
    };

    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Movie Mania!</h1>
                <p>Your ultimate destination for movie information and reviews.</p>
            </header>
            
            <section className="home-image">
                <img src={process.env.PUBLIC_URL + '/OIP (1).jpg'} alt="Cinematic Journey" /> 
                <p>Join us on a cinematic journey!</p>
            </section>

            <section className="home-content">
                <h2>Discover Your Next Favorite Movie</h2>
                <h3>Featured Movies</h3>
                <label htmlFor="movie-select">Select a movie:</label>
                <select id="movie-select" onChange={handleMovieSelect}>
                    <option value="">--Please choose an option--</option>
                    {movies.map(movie => (
                        <option key={movie} value={movie}>
                            {movie}
                        </option>
                    ))}
                </select>
            </section>

            <section className="user-profile">
                <h2>Your Selected Movie</h2>
                {selectedMovie ? (
                    <p>You have selected: <strong>{selectedMovie}</strong></p>
                ) : (
                    <p>No movie selected yet.</p>
                )}
            </section>
        </div>
    );
}

export default Home;
