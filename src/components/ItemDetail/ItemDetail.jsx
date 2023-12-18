import React from "react";
import { Button } from "../Button/Button";
import { useCount } from "../../hooks";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";


export const ItemDetail = ({id, name, description, img, price, stock }) => {

  const { addItem } = useContext(CartContext);
  const { increment, decrement, count } = useCount(0, stock);

  const handleClick = () => {
    Swal.fire("Producto agregado al carrito");
  };

  const handleClickNo = () => {
    Swal.fire("Debes agregar la cantidad del producto que deseas");
  };

  return (
    <div className="container border pt-4">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h4 className="text-start">{name}</h4>
          <img className= "img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-4">
          <p className="text-start"> {description} </p>
          <h3 className="text-start pb-3">Precio: ARS$ {price} .-</h3>
        <div>
          < Button text="-" variant="btn-outline-secondary me-2" functionClick={decrement}/>
          <strong>{count}</strong>
          < Button text="+" variant="btn-outline-secondary ms-2" functionClick={increment}/>
        </div>  
        <div className="pt-3 pb-3">
          <Button
            text="Agregar al Carrito"
            variant="btn-success"
            functionClick={() => {
              if (count === 0){
                handleClickNo();
              } else {    
                handleClick(); 
                addItem({ id, name, price }, count); 
              }
            }}/>
        </div>  
      </div>
    </div>
  </div>
  );
};

