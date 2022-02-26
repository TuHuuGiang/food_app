import './style.css';
import cat1 from '../../assets/img/cate/cat-1.png'
import cat2 from '../../assets/img/cate/cat-2.png'
import cat3 from '../../assets/img/cate/cat-3.png'
import cat4 from '../../assets/img/cate/cat-4.png'
import cat5 from '../../assets/img/cate/cat-5.png'
import cat6 from '../../assets/img/cate/cat-6.png'

export default function Category() {
    return (
        <>
            <div className="category">
                <a href="" className="category__item">
                    <img src={cat1} alt="" />
                    <h3>Combo</h3>
                </a>
                <a href="" className="category__item">
                    <img src={cat2} alt="" />
                    <h3>Pizza</h3>
                </a>
                <a href="" className="category__item">
                    <img src={cat3} alt="" />
                    <h3>Burger</h3>
                </a>
                <a href="" className="category__item">
                    <img src={cat4} alt="" />
                    <h3>Chicken</h3>
                </a>
                <a href="" className="category__item">
                    <img src={cat5} alt="" />
                    <h3>Bữa tối</h3>
                </a>
                <a href="" className="category__item">
                    <img src={cat6} alt="" />
                    <h3>Thức uống</h3>
                </a>
            </div>
        </>
    );
}