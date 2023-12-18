import { useContext} from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";


export const Brief = () => {
    const { orderId } = useContext(FirebaseContext);
    const { cartItems, totalCartItems } = useContext( CartContext);
    
    return (
        <div className="container pt-5">
            <h3>Tu pedido ha sido generado con Éxito!</h3>
            <h5>Tu numero de orden es: {orderId}</h5>
            <p>Detalle de tu pedido:</p>
            <ul>
                {cartItems.map((item) => (
                <li key={item.id}> {item.quantity} - {item.name}</li>
                ))}
                <li>Total: {totalCartItems} </li>
            </ul>
        </div>
    );
};


