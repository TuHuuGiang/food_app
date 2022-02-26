import { Link } from 'react-router-dom';
import { ref, child, get } from "firebase/database";
import { database } from '../../utils/firebase_connect';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';
import foodTest from '../../assets/img/product/food-1.png';

export default function ProdDetail() {
    let [arrProds, setArrProds] = useState([]);
    let { id } = useParams('');
    let [prodDetail, setProdDetail] = useState('');
    let [prods, setProds] = useState([]);
    let [pRelated, setPRelated] = useState([]);

    useEffect((id) => {
        loadData();
    }, [id]);

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
                    setArrProds(arrProds);
                    // setProds(arrProds);
                    arrProds.map(p => {
                        console.log(id);
                        if (p.idProd == id) {
                            setProdDetail(p);
                        }
                    });

                    let num1 = Math.floor((Math.random() * 23) + 100);
                    let test1 = arrProds.filter(p => p.idProd == num1);
                    let num2 = Math.floor((Math.random() * 23) + 100);
                    let test2 = arrProds.filter(p => p.idProd == num2);
                    let num3 = Math.floor((Math.random() * 23) + 100);
                    let test3 = arrProds.filter(p => p.idProd == num3);
                    let num4 = Math.floor((Math.random() * 23) + 100);
                    let test4 = arrProds.filter(p => p.idProd == num4);
                    let arrRelated = [...test1, ...test2, ...test3, ...test4];
                    console.log(arrRelated);
                    setPRelated(arrRelated);
                    // setPRelated(test);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    // const getProd = (id) => {
    //     console.log(id);
    //     arrProds.map(p => {
    //         if (p.idProd == id) {
    //             setProdDetail(p);
    //         }
    //     });
    // }

    return (
        <>
            <div className="product">
                <div className="product-container">
                    <div className="product__img">
                        <img src={prodDetail.imgProd} alt="" className="img-detail" />
                    </div>
                    <div className="product__info">
                        <h1 className="product__info-name">{prodDetail.nameProd}</h1>
                        <h2 className="product__info-price">{prodDetail.priceProd} VNĐ</h2>
                        <input type="number" className="product__info-quantity" min={1} max={10} value={1} />
                        <Link to="" className="buy">Thêm vào giỏ hàng</Link>
                    </div>
                </div>
            </div>
            <div className="product-related">
                <h1>Sản phẩm liên quan</h1>
                <div className="product-content">
                    {
                        pRelated.map((p, index) => (
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
                                        59.000 VNĐ
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