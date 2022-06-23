import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

import not_found from '../assets/img/not-found.png'
import { useContext } from 'react';
import {CartContext} from '../context/CartContextProvider'

const Category = () => {
  const {clothes} = useContext(CartContext)
  const { id } = useParams()

  const [idParam, setIdParam] = useState(id);
  const [clotheList, setClotheList] = useState([]);

  useEffect(() => {
    setIdParam(id)
    const clothesArray = clothes.filter(clothe => clothe.categories.includes(idParam))
    setClotheList(clothesArray)
  }, [id, idParam]);
  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Remeras disponibles<br /></h2>
        </div>
      </div>
      <div className="row mt-5">
        {
          clotheList && clotheList.length > 0 ?
            <ItemListContainer clothes={clotheList} />
          :
            <div className="col-12 text-center">
              <hr />
              <h3 className="mb-5">No hay remeras aquí</h3>
              <img src={not_found} alt="Not found any remeras icon" className="img-fluid" width="300"/>
            </div>
        }
      </div>
    </div>
  )
}

export default Category