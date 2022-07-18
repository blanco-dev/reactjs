import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemInfo = ({ id, stock, buttonDisplay, setQuantity }) => {
  const [inputNumber, setInputNumber] = useState(0);

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
    if (e >= 0 && e <= stock) {
      
      setInputNumber(Number(e));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuantity(inputNumber);
  };
  return (
    <form className="w-100" onSubmit={(e) => handleSubmit(e)}>
      {stock > 0 && buttonDisplay && (
        <div className="d-flex text-center w-100 item-count">
          <button type="button" onClick={substractQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
          <input
            type="number"
            onChange={(e) => handleChange(e.target.value)}
            value={inputNumber}
          />
          <button type="button" onClick={addQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
      )}
      <Link
        to={`/item/${id}`}
        className="btn btn-more-info btn-outline-yellow btn-sm rounded-pill mt-2 w-100"
      >
        Más info
      </Link>
      {buttonDisplay && (
        <>
          <input
            type="submit"
            className="btn btn-outline-accent rounded-pill mt-2 w-100"
            disabled={stock === 0 && "disabled"}
            value="Añadir al carrito"
            onClick={(e) => handleSubmit(e)}
          />

          <p className="book-stock mt-1">
            Stock:{" "}
            <span className={stock > 0 ? "text-success" : "text-danger"}>
              {" "}
              <b>{stock}</b>
            </span>
          </p>
        </>
      )}

      {!buttonDisplay && (
        <div className="mt-3">
          <h6>Este libro se encuentra en el carrito</h6>

          <Link className="btn text-orange rounded-pill mt-2 w-100" to="/cart">
            Ir al carrito
          </Link>
        </div>
      )}
    </form>
  );
};

export default ItemInfo;
