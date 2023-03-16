import "./Product.scss";
import ProdImage from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
    return <div className="product-cart">
        <div className="thumbnail">
            <img src={ProdImage} alt="" />
        </div>
        <div className="product-detail">
            <span className="name">Product Name</span>
            <span className="price"> &#8377;499</span>
        </div>
    </div>;
};

export default Product;
