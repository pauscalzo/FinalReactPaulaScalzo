import { Counter } from "../Counter/Counter"
import { Button } from "../Button/Button"

export const ItemDetail = ({name, description, img, price, stock }) => {
   
  return (
    <div className="container border m-2 pt-4">
        <div className="row justify-content-center">
            <div className="col-4">
                <h4 className="text-start">{name}</h4>
                <img className= "img-fluid" src={img} alt="" />
            </div>
            <div className="col-4">
                <p className="text-start"> {description} </p>
                <h3 className="text-start pb-3">Precio: ARS$ {price} .-</h3>
                <Counter max={stock} />
                <Button text="Agregar al Carrito" variant="btn-success" />
            </div>
        </div>
    </div>
  );
};

