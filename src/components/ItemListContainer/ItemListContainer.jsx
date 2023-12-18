import { useContext, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Footer } from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";


export const ItemListContainer = () => {
    const { category } = useParams();
    const { products, getProductsDB, isLoading } = useContext(FirebaseContext);
    
    useEffect(() => {
        getProductsDB(category)
    }, [category]); 
    
    return (
        <div className="container text-center">
            <div className="row align-items-center pt-4">
                <div className="col">   
                    { isLoading ? <img src="/img/giphy.gif" alt="" /> : < ItemList products={products}/> }    
                    <Footer />
                </div>
            </div>
        </div>
    );
};