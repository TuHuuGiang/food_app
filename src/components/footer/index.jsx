import './style.css';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__social">
                    <a href="https://www.facebook.com/tuhuugiang" className="fab fa-facebook-f"></a>
                    <a href="" className="fab fa-twitter"></a>
                    <a href="" className="fab fa-instagram"></a>
                    <a href="" className="fab fa-youtube"></a>
                </div>
                <div className="copy-right">
                    <h3>© 2022 G-Food All Rights Reserved!</h3>
                </div>
            </footer>
        </>
    );
}