import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ( { children } ) => {
    const [cartItems, setCartItems] = useState ([]);
    const [totalCartItems, setTotalCartItems] = useState (0);
    const [totalQuantity, setTotalQuantity] = useState (0);
    
    const addItem = ( item, quantity ) => {
        const index = cartItems.findIndex((product) => product.id === item.id);

        if(index !== -1) { 
            const cartItemsCopy = [...cartItems];
            cartItemsCopy[index].quantity += quantity;
            cartItemsCopy[index].subtotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;
            setCartItems(cartItemsCopy);
        } else { 
        const newItem = { 
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
            subtotal: quantity * item.price
        };
        setCartItems([...cartItems, newItem]);   
        }   
    };

    const removeItem = (id) => {
        const arrayFilter = cartItems.filter(item => item.id !== id);
        setCartItems(arrayFilter);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const handleTotal = () => {
        const total = cartItems.reduce ((acum, item) => acum + item.subtotal, 0);
        setTotalCartItems(total);
    };

    const handleTotalQuantity = () => {
        const total = cartItems.reduce ((acum, item) => acum + item.quantity, 0);
        setTotalQuantity(total);    
    };

    useEffect(() => {
        handleTotal();
        handleTotalQuantity();
    }, [cartItems]);

    const objectValue = { 
        cartItems,
        totalCartItems,
        totalQuantity,
        addItem,
        removeItem,
        clearCart,
    };

    return <CartContext.Provider value={ objectValue } > { children } </CartContext.Provider>
};