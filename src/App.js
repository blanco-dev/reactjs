import NavBar from './components/NavBar';
import "boxicons";
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import React, {useCallback, useEffect, useState} from "react";
import ItemCount from './components/ItemCount';

function App() {
  const onAdd = (count) => {
    alert(`sumaste ${count} productos`)
  }
  return (
  <><NavBar /> 
  <ItemListContainer /> 
  <ItemCount initial={1} numero={10} onAdd={onAdd} />
  </>
  )
};

export default App;
