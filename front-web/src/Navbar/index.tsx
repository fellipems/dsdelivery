import './styles.css';
import {ReactComponent as Logo} from './logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link> {/* Só podemos usar o Link se estivermos dentro do mecanismo de rotas */}
        </nav>
    )
}

export default Navbar;