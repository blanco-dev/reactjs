import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const Orders = () => {
  const [arrayOrders, setArrayOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getOrders } = useContext(CartContext);

  let navigate = useNavigate();

  const getAllOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrders();
      setArrayOrders(data);
      setLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`);
      if (arrayOrders.length <= 0) {
        return navigate("/");
      }
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="container top-to-navbar-2" style={{ minHeight: "80vh" }}>
      <div className="table-responsive">
        <h1 className="text-center mb-5">Tus ordenes</h1>
        {loading ? (
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-4">Cargando ordenes...</span>
            <div
              className="spinner-grow bg-gradient shadow-lg "
              role="status"
            ></div>
          </div>
        ) : (
          <>
            {arrayOrders && arrayOrders.length > 0 ? (
              <table className="table table-dark table-striped">
                <thead className="p-2 text-center">
                  <tr>
                    <th>Ticket de compra</th>
                    <th>Productos</th>
                    <th>Fecha</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayOrders.length > 0 &&
                    arrayOrders.map(
                      (order) =>
                        order && (
                          <tr key={order.id} className="align-middle">
                            <td className="align-items-center fw-bold">
                              {order.id}
                            </td>
                            <td>
                              {order.data.items.length > 0 &&
                                order.data.items.map((item) => (
                                  <div key={item.id}>
                                    <div className="d-flex justify-content-between">
                                      <b className="text-orange me-2">
                                        {item.name}
                                      </b>
                                      <span className="fw-light text-end">
                                        {item.quantity} x <b>${item.price}</b>
                                      </span>
                                    </div>
                                    ---------
                                  </div>
                                ))}
                            </td>
                            <td className="text-center">
                              {order.data.date
                                .toDate()
                                .toLocaleString("en-GB", {
                                  timeZone: "America/Buenos_Aires",
                                })}
                            </td>
                            <td className="fw-bold text-center">
                              ${order.data.total}
                            </td>
                          </tr>
                        )
                    )}
                </tbody>
              </table>
            ) : (
              <h4 className="text-center">Sin ordenes</h4>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
