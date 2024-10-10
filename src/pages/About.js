import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <header className="about-header">
                <h1>About Movie Mania</h1>
            </header>
            <section className="about-content">
                <p>
                    Movie Mania is  designed for movie lovers to discover and manage their favorite films. Whether you're a casual viewer or a film buff, we've got 
                    something for everyone!.Explore our extensive collection of movies, from timeless classics to the latest blockbusters.
                    Browse reviews, ratings, and trailers to help you choose your next watch!
                </p>
                <h2>Features</h2>
                <ul>
                    <li>Browse an extensive database of movies</li>
                    <li>User profiles to save favorites and reviews</li>
                
                
                </ul>
            </section>
        </div>
    );
}

export default About;
