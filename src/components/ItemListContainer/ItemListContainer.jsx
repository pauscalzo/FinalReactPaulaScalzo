import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import { ItemList } from "../ItemList/ItemList"
import { Footer } from "../Footer/Footer"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState ([]);
    const [isLoading, setIsLoading] = useState (true);

    useEffect(() => {
        setIsLoading(true); 
        getProducts()
            .then((resp) => {
                if (category) {
                    const Filter = resp.filter((product) => product.category === category); 
                    if (Filter.length > 0){
                    setProducts(Filter);
                    } else {
                    setProducts(resp);
                    }
                } else {
                setProducts(resp);
                }
                setIsLoading(false);
                })
            .catch((error) => console.log(error));
        }, [category]); 
    
        return (
            <>
                <div className="container text-center">
                    <div className="row align-items-center pt-4">
                        <div className="col">   
                            { isLoading ? <img src="/img/giphy.gif" alt="" /> : < ItemList products={products}/> }    
                            <Footer />
                        </div>
                    </div>
                </div>
            </>
        );
};