import { Item } from "../Item/Item";

export const ItemList = ({products}) => {

        return (
            <div className="row row-gap-3">
                { products.map(product => <Item key={product.id} {...product}/>)}
            </div>
    );
};