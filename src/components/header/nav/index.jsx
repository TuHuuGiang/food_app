import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {
    return (
        <>
            <div className="header__nav">
                <ul>
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/product-category/burger">Burger</Link></li>
                    <li><Link to="/product-category/chicken">Gà</Link></li>
                    <li><Link to="/product-category/drink">Thức uống</Link></li>
                    <li><a href="#contact">Liên hệ</a></li>
                </ul>
            </div>
        </>
    );
}