import { CartWidget } from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={styles.logo}>
                        <a className="navbar-brand" href="#">
                            <img src="/img/acococho.png" alt=""/>
                        </a>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="#">LEGO</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">PLAYMOVIL</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">BARBIE</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">VIDEOJUEGOS</a>
                            </li>
                        </ul> 
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </>
    )
}
