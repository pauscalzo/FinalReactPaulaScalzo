
import { ItemDetailContainer, ItemListContainer, NavBar, Cart, Order, Brief} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";

export const App = () => {

  return (
    <FirebaseContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path="/category/:category" element={ <ItemListContainer /> }/>
            <Route path="/item/:id" element={ <ItemDetailContainer /> }/>
            <Route path="/Cart" element={ <Cart /> }/>
            <Route path="/Order" element={ <Order /> }/>
            <Route path="/Brief" element={ <Brief /> }/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </FirebaseContextProvider>
  );
};


