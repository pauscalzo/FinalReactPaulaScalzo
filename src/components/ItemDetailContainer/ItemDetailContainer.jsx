import { useEffect, useContext } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Footer } from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const { item, getProductById, isLoading } = useContext(FirebaseContext);

    useEffect(() => {
        getProductById(id);
    }, [id]);

    return (
        <div className="container text-center">
            <div className="row align-items-center pt-4">
                <div className="col">   
                    { isLoading ? <img src="/img/giphy.gif" alt="" /> : item && <ItemDetail { ...item }/>}
                    <Footer />
                </div>
            </div>
        </div>   
    );
};
