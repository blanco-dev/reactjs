import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const { orders, categories, getCategories } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <nav
      className="navbar py-3 navbar-expand-lg navbar-dark navbar-white-gray fixed-top"
      id="navbar"
    >
      <div className="container">
        <Link
          onClick={() => setExpanded(false)}
          className="navbar-brand grow"
          to={"/"}
        >
          <b>No tan Distinto</b>
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
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
        <div
          className={`collapse navbar-collapse ${expanded && "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav navbar-nav-scroll m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                onClick={() => setExpanded(false)}
                className="nav-link grow active"
                aria-current="page"
                to="./"
              >
                Inicio
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
                        onClick={() => setExpanded(false)}
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
            {orders.length > 0 && (
              <li className="nav-item grow position-relative">
                <Link
                  onClick={() => setExpanded(false)}
                  to="/orders"
                  title="Your orders"
                  className="nav-link grow active"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-inboxes"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438L14.933 6zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0H1.066z" />
                  </svg>
                </Link>
              </li>
            )}
            <li className="nav-item grow position-relative">
              <Link
                onClick={() => setExpanded(false)}
                className="nav-link"
                title="Cart"
                to="/cart"
              >
                <CartWidget />
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
