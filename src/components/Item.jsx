import { useEffect, useState, useContext } from "react";
import Alert from "./Alert";
import ItemInfo from "./ItemInfo";
import { CartContext } from "../context/CartContextProvider";

const Item = ({ clothe }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const { name, photo, desc, info, stock, id, price } = clothe;
  const [quantity, setQuantity] = useState(0);
  const [alert, setAlert] = useState(false);
  const [buttonDisplay, setButtonDisplay] = useState(true);

  useEffect(() => {
    if (isInCart(id)) {
      setButtonDisplay(false);
    }
  }, []);
  useEffect(() => {
    if (quantity > 0 && !isInCart(id)) {
      addItem(clothe, quantity);
      setButtonDisplay(false);
      setAlert(true);
    }
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [quantity]);

  return (
    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
      <div className="box pb-3 mb-2">
        <div className="box-header">
          <div className="box-image">
            <img src={require(`../assets/img/${photo}`)} alt={name} />
          </div>
        </div>
        <div className="box-body p-3">
          <p className="clothe-title">{name}</p>
          <p className="clothe-desc">{desc}</p>
          <p className="clothe-info pe-3">{info}</p>
          <p>
            <span className="price">$ {price}</span>
          </p>
          <ItemInfo
            id={id}
            stock={stock}
            buttonDisplay={buttonDisplay}
            setQuantity={setQuantity}
          />
        </div>
      </div>
      {alert && (
        <Alert type="success">
          Añadido <b>al carrito</b>
        </Alert>
      )}
    </div>
  );
};

export default Item;
