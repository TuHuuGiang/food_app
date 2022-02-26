import Nav from './nav';
import './style.css';

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <a href="">
                        <i className="fas fa-utensils logo"></i>
                        G-Food
                    </a>
                </div>
                <Nav />
                <div className="header__icons">
                    <a href="">
                        <i className="icon fas fa-search"></i>
                    </a>
                    <a href="">
                        <i className="icon fas fa-shopping-cart"></i>
                    </a>
                    <a href="">
                        <i className="icon fas fa-user"></i>
                    </a>
                </div>
            </header>
        </>
    );
}