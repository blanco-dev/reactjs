import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { findClothe, getCategories } = useContext(CartContext);
  const [singleClothe, setSingleClothe] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setSingleClothe(findClothe(id));
  }, [id]);

  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        {getCategories()}
        <ItemDetail singleClothe={singleClothe} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
