import "./style.css";
import imgTest from "../../assets/img/product/food-1.png";

export default function Cart() {
  return (
    <>
      <div className="cart">
        <div className="cart-container">
          <h3>Sản phẩm của bạn</h3>
          <div className="cart-content">
            <div className="cart-product">
              <div className="product">
                <img className="cart-img" src={imgTest} alt="" />
              </div>
              <div className="content">
                <i class="fas fa-times delete"></i>
                <h4 className="product-name">Burger Mozzarella</h4>
                <span>Số lượng: </span>
                <input type="number" className="product-quantity" />
                <br />
                <span>Giá: </span>
                <span className="product-price">59000 VNĐ</span>
              </div>
            </div>
            <div className="cart-product">
              <div className="product">
                <img className="cart-img" src={imgTest} alt="" />
              </div>
              <div className="content">
                <i class="fas fa-times delete"></i>
                <h4 className="product-name">Burger Mozzarella</h4>
                <span>Số lượng: </span>
                <input type="number" className="product-quantity" />
                <br />
                <span>Giá: </span>
                <span className="product-price">59000 VNĐ</span>
              </div>
            </div>
            <div className="cart-product">
              <div className="product">
                <img className="cart-img" src={imgTest} alt="" />
              </div>
              <div className="content">
                <i class="fas fa-times delete"></i>
                <h4 className="product-name">Burger Mozzarella</h4>
                <span>Số lượng: </span>
                <input type="number" className="product-quantity" />
                <br />
                <span>Giá: </span>
                <span className="product-price">59000 VNĐ</span>
              </div>
            </div>
          </div>
          <div className="total">
            <span>Tổng tiền: </span>
            <span className="total-price">200000 VNĐ</span>
          </div>
        </div>
      </div>
    </>
  );
}
