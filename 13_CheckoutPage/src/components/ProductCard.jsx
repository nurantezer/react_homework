import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ item, getProducts }) => {
  const url = process.env.REACT_APP_API_URL;
  const { name, image, price, dampingRate, amount, id } = item;
  const navigate = useNavigate(); //!name tıkladığımızda update-product sayfasına gitmek için useNavigate hookuna ihtiyacımız var
  
}

export default ProductCard