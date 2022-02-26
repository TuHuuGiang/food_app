import './style.css';
import icon1 from '../../assets/img/contact/icon-1.png';
import icon2 from '../../assets/img/contact/icon-2.png';
import icon3 from '../../assets/img/contact/icon-3.png';

export default function Order() {
    return (
        <>
            <div className="order" id='contact'>
                <div className="heading">
                    <span>Đặt hàng ngay</span>
                    <h3>Giao hàng tận nơi nhanh nhất</h3>
                </div>
                <div className="order__content">
                    <div className="order__content-icon">
                        <img src={icon1} alt="" className="icon-image" />
                        <h3 className="icon-desc">7:00am To 10:30pm</h3>
                    </div>
                    <div className="order__content-icon">
                        <img src={icon2} alt="" className="icon-image" />
                        <h3 className="icon-desc">+123-456-7890</h3>
                    </div>
                    <div className="order__content-icon">
                        <img src={icon3} alt="" className="icon-image" />
                        <h3 className="icon-desc">SG, Việt Nam</h3>
                    </div>
                </div>
            </div>
        </>
    );
}