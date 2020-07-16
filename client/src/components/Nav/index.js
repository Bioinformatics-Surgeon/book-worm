import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand justify-content-center" href="/">
                Book Worm
            </a>
            <ul className="nav justify-content-end nav-pills">
                <li className="nav-item">
                    <a className="nav-link active text-success" href="#">
                        Add Word
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-success" href="#">
                        Search
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
