import { Button } from "../Button/Button"
import { Link } from "react-router-dom"


export const Item = ({id, name, img}) => {
    return(
        <div className="col-md-4 card p-2">
            <img src={img} className="card-img-top img-fluid" alt=""/>
            <div className="card-body">
                <h5 className="card-title"> {name}</h5>
            </div>
            <Link to={`/item/${id}`}>
                < Button text="Detalles" variant="btn-outline-success" />
            </Link>
        </div> 
    );
};