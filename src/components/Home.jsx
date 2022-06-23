import { useContext } from 'react';
import {CartContext} from '../context/CartContextProvider';
import Items from './Items';
import ItemListContainer from './ItemListContainer';

const Home = () => {
  const {clothes} = useContext(CartContext);
  return (
    <>
      <Items />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>OFERTAS</h3>
          </div>
          <hr />
        </div>
        <div className="row g-3">
          <ItemListContainer
            clothes={clothes}
          />
        </div>
      </div>
    </>
  )
}

export default Home