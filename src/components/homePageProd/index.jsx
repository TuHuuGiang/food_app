import { ref, child, get } from "firebase/database";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { database } from "../../utils/firebase_connect";
import './style.css';
import foodTest from '../../assets/img/product/food-1.png';

export default function HomePageProd() {
    let [prods, setProds] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        const dbRef = ref(database);
        get(child(dbRef, `products`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    let arrData = data.map(p => p);
                    let arrDrink = arrData[0].arrProd;
                    let arrBurger = arrData[1].arrProd;
                    let arrChicken = arrData[2].arrProd;
                    let arrProds = [...arrDrink, ...arrBurger, ...arrChicken];
                    setProds(arrProds);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="product">
                <div className="heading">
                    <span>Món ăn phổ biến</span>
                    <h3>Các món ăn đặc biệt của chúng tôi</h3>
                </div>
                <div className="product__content">
                    {
                        prods.map((p, index) => (
                            <div className="product__item" key={index}>
                                <div className="product__item-image">
                                    <Link to={`/product-detail/${p.idProd}`}>
                                        <img src={p.imgProd} alt="" />
                                    </Link>
                                </div>
                                <div className="product__item-content">
                                    <h3>
                                        <Link to="/product-detail" className="product__item-name">
                                            {p.nameProd}
                                        </Link>
                                    </h3>
                                    <h2 className="product-price">
                                        {p.priceProd}
                                    </h2>
                                    <Link to="/cart" className="buy">Thêm vào giỏ hàng</Link>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                59.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                59.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                59.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                    <div className="product__item">
                        <div className="product__item-image">
                            <img src={foodTest} alt="" />
                        </div>
                        <div className="product__item-content">
                            <h3>Burger</h3>
                            <h2 className="product-price">
                                59.000 VNĐ
                            </h2>
                            <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}