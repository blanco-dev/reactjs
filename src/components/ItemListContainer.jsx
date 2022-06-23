import { useEffect, useState } from "react";
import Alert from "./Alert";
import ItemList from "./ItemList";

const ItemListContainer = ({ clothes }) => {
  const [clothesList, setClothesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const clothePromise = new Promise((res, rej) => {
      setLoading(true);
      setTimeout(() => {
        res(clothes);
      }, 800);
    });

    clothePromise
      .then((result) => {
        setClothesList(result);
      })
      .catch((error) => {
        setAlert(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [clothes]);

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-4">Cargando...</span>
          <div
            className="spinner-grow shadow-lg "
            role="status"
          ></div>
        </div>
      ) : alert ? (
        <Alert type="danger">Error</Alert>
      ) : (
        <ItemList clothesList={clothesList} />
      )}
    </>
  );
};

export default ItemListContainer;
