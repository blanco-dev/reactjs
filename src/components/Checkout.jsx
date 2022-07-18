import { Timestamp } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import Alert from "./Alert";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [error, setError] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderId, setOrderId] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const submitting = async () => {
    const date = new Date(Timestamp.now().seconds * 1000);
    const order = {
      items: cartItems,
      date,
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
        <div className="col-12 mx-auto">
          <h1 className="text-center">Comprar</h1>
          <div className="container">
            {!orderStatus ? (
              <div className="row">
                <div className="col-12 col-lg-6 py-4 px-0">
                  <form
                    className="p-4 p-md-5 bg-dark rounded"
                    onSubmit={handleSubmit(submitting)}
                  >
                    {error && (
                      <Alert type="danger">Completar todos los campos</Alert>
                    )}
                    <div className="mb-3">
                      <div className="row mb-2">
                        <div className="col-12 col-md-6 mb-2 form-floating">
                          <input
                            placeholder="full name"
                            autoComplete="name"
                            className={
                              "form-control " + (errors?.name && "is-invalid")
                            }
                            {...register("name", {
                              required: true,
                              minLength: 3,
                              maxLength: 20,
                              pattern: /^[a-zA-Z\s]*$/,
                            })}
                            onChange={handleChange}
                          />
                          <label htmlFor="name" className="fw-light">
                            Nombre completo
                          </label>
                          {errors?.name?.type === "required" && (
                            <span className="errorField">
                              Este campo es obligatorio
                            </span>
                          )}
                          {errors?.name?.type === "maxLength" && (
                            <span className="errorField">
                              No puedes exceder los 20 caracteres
                            </span>
                          )}
                          {errors?.name?.type === "minLength" && (
                            <span className="errorField">
                              Minimo tiene que ser 3 caracteres
                            </span>
                          )}
                          {errors?.name?.type === "pattern" && (
                            <span className="errorField">
                              Caracteres alfabeticos obligatorios
                            </span>
                          )}
                        </div>
                        <div className="col-12 col-md-6 mb-2 form-floating">
                          <input
                            type="text"
                            className={
                              "form-control " + (errors?.phone && "is-invalid")
                            }
                            placeholder="Phone"
                            {...register("phone", {
                              required: true,
                              pattern: /^[\d ()+]+$/,
                            })}
                            onChange={handleChange}
                          />
                          <label htmlFor="phone" className="fw-light">
                            Telefono
                          </label>
                          {errors?.phone?.type === "required" && (
                            <span className="errorField">
                            Este campo es obligatorio
                            </span>
                          )}
                          {errors?.phone?.type === "pattern" && (
                            <span className="errorField">
                              Solo numeros disponible
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 form-floating">
                          <input
                            className={
                              "form-control " + (errors?.email && "is-invalid")
                            }
                            placeholder="email"
                            {...register("email", {
                              required: true,
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            })}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="email"
                            className="form-label fw-light"
                          >
                            Email
                          </label>
                          {errors?.email?.type === "required" && (
                            <span className="errorField">
                            Este campo es obligatorio
                            </span>
                          )}
                          {errors?.email?.message && (
                            <span className="errorField">
                              {errors?.email?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-accent text-white bg-gradient  rounded-pill mt-5 w-100"
                    >
                      Continuar la compra
                    </button>
                  </form>
                </div>
                <div className="col-12 col-lg-6 p-lg-4">
                  <div className="row py-4">
                    {cartItems.map((item) => (
                      <div className="col-12 col-xl-6" key={item.id}>
                        <Link
                          className="text-white d-flex"
                          to={`/item/${item.id}`}
                        >
                          <img
                            src={item.photo}
                            alt={item.name}
                            className="img-fluid rounded-circle shadow"
                          />
                          <div className="ms-4">
                            <h6>{item.name}</h6>
                            <p>
                              <span className="fw-light">
                                {item.quantity} x{" "}
                              </span>
                              ${item.price}
                            </p>
                          </div>
                        </Link>
                        <hr className="pt-1" />
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="bg-dark p-3 rounded shadow">
                        <h5 className="m-0">
                          <span className="fw-light">Total: </span>{" "}
                          <span>${totalPriceCart()}</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success text-center">
                    <h3 className="fw-light">
                      La orden fue <b>completada</b> con exito, con el siguiente ticket:
                    </h3>
                    <h3 className="my-4 text-truncate">{orderId}</h3>
                    <h5 className="fw-light">
                      Seras redireccionado en <b>5</b> segundos
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
