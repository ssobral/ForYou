import { Link, useLocation } from 'react-router-dom';
import HomemAranha from "../assets/homem-aranha.png";

function Nav() {
    const { pathname } = useLocation();

    if (pathname === '/' || pathname === '/memoria') {
        return (
            <nav className="home-navigation" aria-label="Navegação principal">
                <Link to="/" className="home-brand" aria-label="Página inicial">
                    <img src={HomemAranha} className="home-brand__icon" alt="Homem-Aranha" />
                    {pathname === '/memoria' && 'Home'}
                </Link>
                <span className="home-navigation__note">você + eu <span aria-hidden="true">♡</span></span>
            </nav>
        )
    }

    return (
        <>
            <nav className="headerHome navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={HomemAranha} className="homem-aranha" alt="Homem-Aranha" />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
