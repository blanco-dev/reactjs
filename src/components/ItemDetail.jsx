import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({ singleBook }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const { id, name, photo, author, date, price, info, stock, categories } =
    singleBook;
  const [inputNumber, setInputNumber] = useState(0);
  const [buttonDisplay, setButtonDisplay] = useState(true);

  useEffect(() => {
    if (isInCart(id)) {
      setButtonDisplay(false);
    }
  }, [id]);
  const substractQuantity = () => {
    if (inputNumber > 0) {
      setInputNumber(inputNumber - 1);
    }
  };
  const addQuantity = () => {
    if (inputNumber < stock) {
      setInputNumber(inputNumber + 1);
    }
  };
  
  const handleChange = (e) => {
    if (e > 0 && e <= stock) {

      setInputNumber(Number(e));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNumber > 0) {
      addItem(singleBook, inputNumber);
      setButtonDisplay(false);
    }
  };
  return (
    <>
      {photo && (
        <div className="col-12 col-md-4">
          <img
            src={photo}
            alt={name}
            className="img-thumbnail rounded mx-auto d-block w-100 mb-3 mb-sm-0"
          />
        </div>
      )}
      <div className="col-12 col-md-8">
        <h2>{name}</h2>
        <hr />
        <p>{author}</p>
        <p>{date}</p>
        <cite>{info}</cite>
        <h4 className="my-3">${price}</h4>
        <div className="mt-3">
          {categories &&
            categories.length > 0 &&
            categories.map((category, index) => (
              <span
                key={index}
                className="badge grow rounded-pill bg-gradient me-2"
              >
                <Link
                  to={`/category/${category}`}
                  className="text-color-background p-2"
                >
                  {category}
                </Link>
              </span>
            ))}
        </div>
        {buttonDisplay && stock > 0 ? (
          <form onSubmit={(e) => handleSubmit(e)} className="mt-3 w-50">
            <div>
              <ItemCount
                inputNumber={inputNumber}
                substractQuantity={substractQuantity}
                addQuantity={addQuantity}
                handleChange={handleChange}
              />
              <input
                type="submit"
                className="btn btn-outline-accent rounded-pill mt-2 w-100"
                value="Añadir al carrito"
              />
            </div>
          </form>
        ) : stock <= 0 ? (
          <h4 className="mt-4">Sin stock disponible</h4>
        ) : (
          <div className="mt-4">
            <h4 className="text-center">Este libro se encuentra en el carrito</h4>
            <Link
              className="btn btn-outline-accent rounded-pill mt-2 w-100"
              to="/cart"
            >
              Ir al carrito
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
