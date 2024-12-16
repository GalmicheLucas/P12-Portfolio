import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Mon Portfolio</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/projects">Mes projets</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;