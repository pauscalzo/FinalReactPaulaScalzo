import { CiShoppingCart } from "react-icons/ci";

export const CartWidget = () => {
    return (
        <div className="d-flex">
            <CiShoppingCart size={40}/>
            <p>0</p>
        </div>
    )
}