import { ref, child, get } from "firebase/database";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { database } from "../../utils/firebase_connect";
import './style.css';
import foodTest from '../../assets/img/product/food-1.png';

export default function CategoryProd() {
    let { nameCate } = useParams('');
    let [prods, setProds] = useState([]);
    let [cate, setCate] = useState([]);

    useEffect((nameCate) => {
        loadData();
    }, [nameCate]);

    const loadData = () => {
        const dbRef = ref(database);
        get(child(dbRef, `products`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    let arrData = data.map(p => {
                        if (p.nameCate == String(nameCate)) {
                            let cate = p.arrProd;
                            console.log(nameCate);
                            setCate(cate);
                        }
                    });
                    console.log(nameCate);
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
                <div className="product__content">
                    {
                        cate.map((p, index) => (
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
                                    <Link to="/product-detail" className="buy">Thêm vào giỏ hàng</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}