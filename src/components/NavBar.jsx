import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const { categories, getCategories } = useContext(CartContext);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <nav
      className="navbar py-3 navbar-expand-lg navbar-dark navbar-white-gray fixed-top"
      id="navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <b>No tan Distinto</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-nav-scroll m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link grow active"
                aria-current="page"
                to="./"
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link grow dropdown-toggle nav-link-category"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.length > 0 &&
                  categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        className="dropdown-item"
                        to={`category/${category}`}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
          <div className="navbar-nav navbar-nav-scroll">
            <li className="nav-item grow position-relative">
              <CartWidget />
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
