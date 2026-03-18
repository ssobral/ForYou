import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomemAranha from "../assets/homem-aranha.png";

function Nav() {
    const navigate = useNavigate();

    const validade = (e) => {
        e.preventDefault();
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/home');
        } else {
            alert('Efetue o login antes de transitar pelo site.');
        }
    }

    return (
        <>
            <nav className="headerHome navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={HomemAranha} className="homem-aranha" />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Quiz1" className='nav-link'>Quiz 1</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/Quiz2" className='nav-link'>Quiz 2</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav