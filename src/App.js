import NavBar from './components/NavBar';
import "boxicons";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const onAdd = (count) => {
    alert(`sumaste ${count} productos`)
  }
  return (
  <><NavBar /> 
  {/*<ItemListContainer /> 
  <ItemCount initial={1} numero={10} onAdd={onAdd} />*/}
  <ItemDetailContainer/>
  </>
  )
};

export default App;
