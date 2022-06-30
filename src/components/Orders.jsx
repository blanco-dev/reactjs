import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContextProvider";

const Orders = () => {
  const [arrayOrders, setArrayOrders] = useState([]);
  const { orders, getOrders } = useContext(CartContext);

  const getAllOrders = async () => {
    const data = await getOrders();
    setArrayOrders(data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div className="container top-to-navbar-2">
      <div className="table-responsive">
        <table className="table table-dark">
          <thead className="p-2">
            <tr>
              <th>Order Id</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {arrayOrders.map((order) => (
              <tr key={order.id}>
                <td className="align-items-center">{order.id}</td>
                <td>
                  <table className="table table-dark table-bordered">
                    <thead>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </thead>
                    <tbody>
                      {order.items.map((item) => (
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>${item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
