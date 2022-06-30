import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import Alert from "./Alert";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [error, setError] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    setOrderStatus(false);
  }, []);

  const { totalPriceCart, cartItems, addOrder } = useContext(CartContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length <= 0 && !orderStatus) {
      return navigate("/");
    } else if (cartItems.length <= 0 && orderStatus) {
      setTimeout(() => {
        return navigate("/orders");
      }, 5000);
    }
  }, [cartItems]);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (buyer.name == "" || buyer.email == "" || buyer.phone == "") {
      setError(true);
      return;
    }
    setError(false);
    const order = {
      items: cartItems,
      total: totalPriceCart(),
      buyer,
    };
    try {
      setOrderId(await addOrder(order));
      setOrderStatus(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div
      className="container checkout top-to-navbar-2"
      style={{ minHeight: "80vh" }}
    >
      <div className="row">
        <div className="col-12 col-md-10 mx-auto">
          <div className="container">
            {!orderStatus ? (
              <div className="row">
                <div className="col-12 col-md-5 py-4 shadow-lg bg-orange">
                  <h3 className="text-center">Your items</h3>
                  <div className="container">
                    <div className="row p-2">
                      <div className="col-12">
                        <hr />
                        <div className="row">
                          {cartItems.map((item) => (
                            <div className="col-4" key={item.id}>
                              <Link
                                className="text-white"
                                to={`/item/${item.id}`}
                              >
                                <img
                                  src={require(`../assets/img/${item.photo}`)}
                                  alt={item.name}
                                  className="img-fluid rounded shadow"
                                />
                                <h6 className="mt-2 text-center">
                                  {item.name}
                                </h6>
                                <p className="mt-2 text-center">
                                  <span className="fw-light">
                                    {item.quantity} x{" "}
                                  </span>
                                  ${item.price}
                                </p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-12">
                      <hr />
                      <h5 className="mt-5">
                        <span className="fw-light">Cart Total: </span>{" "}
                        <span>${totalPriceCart()}</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-7 py-4 px-0">
                  <form
                    className="p-4 p-md-5 bg-dark shadow-lg"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    {error && (
                      <Alert type="danger">All the info its necesary</Alert>
                    )}
                    <div className="mb-3">
                      <div className="row mb-2">
                        <div className="col-12 col-md-6 mb-2">
                          <label htmlFor="name" className="form-label fw-light">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-2">
                          <label
                            htmlFor="phone"
                            className="form-label fw-light"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label
                            htmlFor="email"
                            className="form-label fw-light"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-accent text-white bg-gradient  rounded-pill mt-5 w-100"
                    >
                      Check out
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success text-center">
                    <h3 className="fw-light">
                      The order was <b>successfully</b> registered with the
                      following id:
                    </h3>
                    <h2>{orderId}</h2>
                    <h5 className="fw-light">
                      You will be redirected in <b>5</b> seconds
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
