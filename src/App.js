import NavBar from './components/NavBar';
import "boxicons";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import React, {useCallback, useEffect, useState} from "react";
import ItemCount from './components/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';

function App() {
  const onAdd = (count) => {
    alert(`sumaste ${count} productos`)
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemCount />}/>
        <Route path='/productos' element={<ItemListContainer />}/>
        <Route path='/sobrenosotros' element={<ItemCount />}/>
      </Routes>
    </BrowserRouter>
  // <><NavBar /> 
  // <ItemListContainer /> 
  // {/* <ItemCount initial={1} numero={10} onAdd={onAdd} /> */}
  )
};

export default App;
