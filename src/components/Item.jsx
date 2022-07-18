import { useEffect, useState, useContext } from "react";
import Alert from "./Alert";
import ItemInfo from "./ItemInfo";
import { CartContext } from "../context/CartContextProvider";

const Item = ({ book }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const { name, photo, author, date, info, stock, id, price, offer } = book;
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
      addItem(book, quantity);
      setButtonDisplay(false);
      setAlert(true);
    }
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [quantity]);

  return (
    <div className="col-12 col-sm-4 col-lg-3">
      <div className="box pb-3 mb-2">
        {photo && (
          <div className="box-header">
            <div className="box-image">
              <img src={photo} alt={name} />
            </div>
          </div>
        )}
        <div className="box-body p-3">
          <p className="book-title">{name && name}</p>
          <p className="book-author">{author && author}</p>
          <p className="book-info pe-3">{info && info}</p>
          <p>
            <span className="price">${price && price}</span>
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
          Añadido al carrito con <b>éxito</b>
        </Alert>
      )}
    </div>
  );
};

export default Item;
