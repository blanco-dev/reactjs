import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Food & Drink</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/productos'>Productos</Link>
              </li>
              <li className="nav-item">
              <Link to='/sobrenosotros'> Sobre nosotros</Link>
              </li>
              <><CartWidget numero={10}/></>
            </ul>
          </div>
        </div>
        
      </nav>
      )
};