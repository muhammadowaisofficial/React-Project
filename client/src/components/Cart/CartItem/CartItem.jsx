import { MdClose } from "react-icons/md";
import ProdImage from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={ProdImage} alt="" />
        </div>

        <div className="prod-detail">
          <span className="name">Product name</span>
          <MdClose className="close-btn" />
            <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
            </div>

            <div className="text">
                <span>3</span>
                <span>x</span>
                <span className="highlight">&#8377;4567</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
