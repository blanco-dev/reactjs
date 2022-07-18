import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const CartDetailPage = () => {
  const { clear, totalPriceCart, removeItem, cartItems } =
    useContext(CartContext);

  return (
    <div className="top-to-navbar-2" style={{ minHeight: "80vh" }}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1>Tu carrito</h1>
          </div>
        </div>
        {cartItems.length > 0 ? (
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto mb-4">
              <div className="table-responsive">
                <table className="table table-bordered table-dark table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {cartItems.length > 0 &&
                      cartItems.map((item) => (
                        <tr className="align-middle" key={item.id}>
                          <th>
                            <button
                              className="btn text-white"
                              onClick={() => removeItem(item.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path
                                  fillRule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />
                              </svg>
                            </button>
                          </th>
                          <th>
                            <img src={item.photo} alt={item.name} width="80" />
                          </th>
                          <td>
                            <Link
                              className="text-white"
                              to={`/item/${item.id}`}
                            >
                              {item.name}
                            </Link>
                          </td>
                          <td>${item.price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            <b>${item.quantity * item.price}</b>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => clear()}
                className="btn btn-outline-accent mt-3"
              >
                Limpiar carrito
              </button>
            </div>
            <div className="col-12 col-lg-4">
              <div className="bg-dark p-3">
                <h5 className="text-center mb-3">Cart Total</h5>
                <p>
                  Subtotal: <span>${totalPriceCart()}</span>
                </p>
                <h5 className="mb-4">
                  Total: <span>${totalPriceCart()}</span>
                </h5>
                <Link to="/checkout" className="btn btn-success w-100">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h4>Tu carrito esta vacio</h4>
            <Link className="btn btn-outline-accent mt-5" to="/">
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetailPage;
