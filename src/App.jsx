
import { ItemDetailContainer, ItemListContainer, NavBar, Cart} from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/category/:category" element={ <ItemListContainer /> }/>
        <Route path="/item/:id" element={ <ItemDetailContainer /> }/>
        <Route path="/Cart" element={ <Cart /> }/>
      </Routes>
    </BrowserRouter> 
  );
};


