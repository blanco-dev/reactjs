import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";
const Footer = () => {
  const { categories, getCategories } = useContext(CartContext);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="container-fluid p-0">
      <footer className="py-3 mt-5">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./">
              Inicio
            </a>
          </li>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={`category/${category}`}>
                  <b>{category}</b>
                </Link>
              </li>
            ))}
        </ul>
        <p className="text-center">
          © <b>No tan Distinto</b>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
