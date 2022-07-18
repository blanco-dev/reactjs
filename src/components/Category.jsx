import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const Category = () => {
  const { id } = useParams();

  const [idParam, setIdParam] = useState(id);

  useEffect(() => {
    setIdParam(id);
  }, [id, idParam]);
  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">
            Libros por categoria <br />
            <span className="text-danger">{idParam}</span>
          </h2>
        </div>
      </div>
      <div className="row mt-5">
        <ItemListContainer categoryProp={id} />
      </div>
    </div>
  );
};

export default Category;
