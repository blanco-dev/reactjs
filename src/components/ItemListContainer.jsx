import { useEffect, useState, useContext } from "react";
import Alert from "./Alert";
import ItemList from "./ItemList";
import { CartContext } from "../context/CartContextProvider";

const ItemListContainer = ({ categoryProp = null }) => {
  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const { getAllBooks } = useContext(CartContext);

  const getProductsFirebase = async () => {
    try {
      setLoading(true);
      const data = await getAllBooks(categoryProp);
      setBooksList(data);
      setLoading(false);
    } catch (error) {
      setAlert(true);
    }
  };
  useEffect(() => {
    getProductsFirebase();
  }, [categoryProp]);

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-4">Loading books...</span>
          <div
            className="spinner-grow bg-gradient shadow-lg "
            role="status"
          ></div>
        </div>
      ) : alert ? (
        <Alert type="danger">Error</Alert>
      ) : (
        <ItemList booksList={booksList} />
      )}
    </>
  );
};

export default ItemListContainer;
