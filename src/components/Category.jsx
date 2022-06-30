import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

import not_found from "../assets/img/not-found.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const Category = () => {
  // const {books} = useContext(CartContext)
  const { id } = useParams();

  const [idParam, setIdParam] = useState(id);
  // const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setIdParam(id);
  }, [id, idParam]);
  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">
            Books by category <br />
            <span className="text-danger">{idParam}</span>
          </h2>
        </div>
      </div>
      <div className="row mt-5">
        <ItemListContainer categoryProp={id} />
        {/* {
          bookList && bookList.length > 0 ?
            <ItemListContainer categoryProp={id} />
          :
            <div className="col-12 text-center">
              <hr />
              <h3 className="mb-5">No books in this category</h3>
              <img src={not_found} alt="Not found any books icon" className="img-fluid" width="300"/>
            </div>
        } */}
      </div>
    </div>
  );
};

export default Category;
