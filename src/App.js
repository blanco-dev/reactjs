import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartDetailPage from './components/CartDetailPage';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Category from './components/Category';
import Footer from './components/Footer';

import CartContextProvider from './context/CartContextProvider';

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
