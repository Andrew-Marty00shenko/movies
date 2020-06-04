import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
            </div>
            <div className="header-title">
                <h1>The most popular movies</h1>
            </div>
        </div>
    )
}

export default Header