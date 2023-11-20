import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Footer } from "../Footer/Footer"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState (true);

    useEffect( () => { 
        getProductById(id)
          .then((resp) => {
            setItem(resp)
            setIsLoading(false);}
            )
          .catch(error => console.log(error)); 
       }, [item])
    return (
        <>
            <div className="container text-center">
                <div className="row align-items-center pt-4">
                    <div className="col">   
                        { isLoading ? <img src="/img/giphy.gif" alt="" /> : item && <ItemDetail { ...item }/>}
                        <Footer />
                    </div>
                </div>
            </div>
        </>   
    );
};
