import './style.css';
import banner01 from '../../assets/img/banner/banner-1.png';
import banner02 from '../../assets/img/banner/banner-2.png';

export default function Banner() {
    return (
        <>
            <div className="banner">
                <div className="banner__desc">
                    <h3>Chào mừng bạn đến với G-Food</h3>
                    <h1>Cứ ăn là thích <br />Không ngại béo mầm 😋</h1>
                </div>
                <div className="banner__image">
                    <img src={banner01} alt="" className="banner01" />
                    <img src={banner02} alt="" className="banner02" />
                </div>
            </div>
        </>
    );
}