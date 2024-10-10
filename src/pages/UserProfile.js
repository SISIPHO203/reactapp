import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
    const [user, setUser] = useState({
        name: 'Sisipho',
        email: 'mavangosisipho@gmail.com',
        movie: 'Inteseller.',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="user-profile">
            <header className="profile-header">
                <h1>User Profile</h1>
            </header>
            <section className="profile-content">
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="movie"
                            value={user.movie}
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    <div>
                        <h2>Name: {user.name}</h2>
                        <h3>Email: {user.email}</h3>
                        <p>Movie: {user.movie}</p>
                    </div>
                )}
                <button onClick={handleEditToggle}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </section>
        </div>
    );
}

export default UserProfile;
