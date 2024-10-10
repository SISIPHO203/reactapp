import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Movie Mania!</h1>
                <p>Your ultimate destination for movie information and reviews.</p>
            </header>
            
            <section className="home-image">
            <img src={process.env.PUBLIC_URL + '/OIP (1).jpg'} alt="Welcome" /> 
                <p>Join us on a cinematic journey!</p>
            </section>
            <section className="home-content">
                <h2>Discover Your Next Favorite Movie</h2>
               
                <h3>Featured Movies</h3>
               
                    Inception<br></br>
                    The Dark Knight<br></br>
                    Interstellar<br></br>
                    Parasite<br></br>
                
            </section>
        </div>
    );
}

export default Home;
