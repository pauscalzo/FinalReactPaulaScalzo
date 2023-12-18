import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={styles.logo}>
                    <Link to="/">
                        <div className="navbar-brand" href="#">
                            <img src="/img/acococho.png" alt=""/>
                        </div>
                    </Link>
                </div>  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">  
                    <ul className="navbar-nav justify-content-center">
                    <Link to="/category/Lego">
                        <li className="nav-item px-2 text-dark-emphasis">
                            LEGO
                        </li>
                    </Link>
                    <Link to="/category/Playmovil">
                        <li className="nav-item px-2 text-dark-emphasis">
                            PLAYMOVIL
                        </li>
                    </Link>
                    <Link to="/category/Barbies">
                        <li className="nav-item px-2 text-dark-emphasis">
                            BARBIE
                        </li>
                    </Link>
                    <Link to="/category/Play-Doh">
                        <li className="nav-item px-2 text-dark-emphasis">
                            PLAY DOH
                        </li>
                    </Link>
                    </ul> 
                </div>
                <Link to="/Cart">
                    <CartWidget/>
                </Link>
            </div>
        </nav>
    );
};
