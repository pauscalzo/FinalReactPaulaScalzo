import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export const Cart = () => {

  const navigate = useNavigate(); 
  const { cartItems, totalCartItems, removeItem } = useContext( CartContext);
  
  const handleFinishOrder = () => {
    if (cartItems.length === 0){
      Swal.fire("Debes agregar algún producto al carrito para Finalizar Compra");
    } else    {   
      navigate("/Order") 
    };
  };

  return (
    <div className="container pt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre:</th>
            <th scope="col">Precio:</th>
            <th scope="col">Cantidad:</th>
            <th scope="col">Sub total:</th>
            <th scope="col"></th>
          </tr>
        </thead>
            
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.name}</th>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.subtotal}</td>
              <td><Button text="X" variant="btn-danger" functionClick={() => removeItem(item.id)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total ${totalCartItems} .-</h4>
      <Button text="Finalizar Compra" variant="btn-info" functionClick={handleFinishOrder}/>
    </div>
  );
};
