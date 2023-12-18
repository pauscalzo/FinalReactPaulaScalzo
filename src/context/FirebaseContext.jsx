import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";
import Swal from "sweetalert2";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [orderId, setOrderId] = useState ("");

    const getProductsDB = (category) => {
        const myProducts = category
        ? query(collection(db, "Productos"), where("category", "==", category))
        : query(collection(db, "Productos"));
        getDocs(myProducts).then((resp) => {
            if (resp.size === 0) {
                console.log("No hay productos");
            }
            const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(productList);
            setIsLoading(false);
        });
    };

    const getProductById = (id) => {
        const productRef = doc(db, "Productos", id);
        getDoc(productRef).then((resp) => {
            if (resp.exists()) {
                const prod = {
                id: resp.id,
                ...resp.data(),
                };
                setItem(prod);
                setIsLoading(false);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Ese ID no Existe",
                });
            }
        });
    };

    const addOrderDB = async (cartProducts, userData, total) => { 
        const newOrder = {
        buyer: userData,
        items: cartProducts,
        data: serverTimestamp(),
        total
        };
        
        const newDoc = await addDoc( collection(db, "orders"), newOrder );
        setOrderId(newDoc.id)
    };

    const objetValue = {
        products,
        item,
        isLoading,
        orderId,
        getProductsDB,
        getProductById,
        addOrderDB
    };

    return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};