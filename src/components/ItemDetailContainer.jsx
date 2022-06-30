import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { findBook } = useContext(CartContext);
  const [singleBook, setSingleBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getBook = async (id) => {
    try {
      setLoading(true);
      const data = await findBook(id);
      setSingleBook(data);
      setLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getBook(id);
  }, [id]);

  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        {loading ? (
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-4">Loading book...</span>
            <div
              className="spinner-grow bg-gradient shadow-lg "
              role="status"
            ></div>
          </div>
        ) : (
          <ItemDetail singleBook={singleBook} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
