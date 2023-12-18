import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Form = () => {

    const navigate = useNavigate();
    const { addOrderDB } = useContext(FirebaseContext);
    const {cartItems, totalCartItems } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            await addOrderDB(cartItems, { name, email, address, city, zip, phone }, totalCartItems);
            navigate('/Brief/');
        } catch (error) {
            console.error("Error al agregar orden:", error);

            Swal.fire({
                icon: "error",
                title: "Error al enviar el formulario",
                text: "Hubo un problema al procesar tu pedido. Por favor, inténtalo de nuevo.",
            });
        };
        
        setName("");
        setEmail("");
        setAddress("");
        setCity("");
        setZip("");
        setPhone("");
    };

    const validEmail = () => {
        if (email === confirmEmail){
            const myButton = document.getElementById("realizarPedido")
            myButton.classList.add('show');
        } else {
            Swal.fire({
            icon: "error",
            title: "Error de Email",
            text: "Los correos electrónicos no coinciden.",
            });
        }
        };

    return (
        <div className="container pt-5">
            <form className="row g-3" onSubmit={handleForm}>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Confirmar Email</label>
                    <input type="email" className="form-control" id="inputConfirmEmail" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} onBlur={validEmail}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="col-6">
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label className="form-label">Código Postal</label>
                    <input type="text" className="form-control" id="inputZip" value={zip} onChange={(e) => setZip(e.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label className="form-label">Teléfono</label>
                    <input type="phone" className="form-control" id="inputPhone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="col-12">
                    <button id="realizarPedido" type="submit" className="notShow btn btn-primary">Realizar Pedido</button>
                </div>
            </form>
        </div>
    );
};
