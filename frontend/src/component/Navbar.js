import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">EriStore</a>
                <li className="d-flex align-items-center d-lg-none ms-auto me-2">
                    <button className='btn--icon mx-2'>
                        <i className="bi bi-bag position-relative">
                            <div className='circle--badge position-absolute top-0 end-0'></div>
                        </i>
                    </button>
                </li>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#">Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#">Product</a>
                        </li>
                        <li className="nav-link mx-2 d-lg-flex align-items-center d-none">
                            <button className='btn--icon'>
                                <i className="bi bi-bag position-relative">
                                    <div className='circle--badge position-absolute top-0 end-0'></div>
                                </i>
                            </button>
                        </li>
                    </ul>
                    <div className='d-flex btn--wrapper mt-5 mt-lg-0'>
                        <button className='w-100 secondary--button rounded'>Sign in</button>
                        <button className='w-100 primary--button rounded'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;