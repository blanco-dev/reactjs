import png_404 from "../assets/img/error-404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        <div className="col-12 text-center">
          <img src={png_404} alt="404 icon" className="img-fluid" />
          <h4 className="mb-4">PÁGINA NO ENCONTRADA</h4>
          <Link className="btn btn-outline-accent mt-3" to="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
