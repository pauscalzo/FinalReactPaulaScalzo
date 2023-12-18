import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return (
        <div className="d-flex">
            <CiShoppingCart size={40}/>
            <p>{ totalQuantity }</p>
        </div>
    );
};