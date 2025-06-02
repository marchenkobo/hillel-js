import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 mb-4">
            <a className="navbar-brand" href="#">SWAPI UI</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">People</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Starships</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
