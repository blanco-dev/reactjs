import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({character}) => {
  const onAdd = (count) => {
    count === 1
      ? alert(`Se agregó ${count} producto al carrito`)
      : alert(`Se agregaron ${count} productos al carrito`);
  };
            return (
              <div className='row'>
                    <div className='col mb-5'>
                      <div className='Card' width='50' >
                        <img src={character.image} alt=''/>
                        <div className='card-body'>
                          <h5 className='card-title'>{character.name}</h5>
                          <hr/>
                          <p>$150</p>
                          <ItemCount inicial={1} stock={5} onAdd={onAdd}></ItemCount>
                          <p>stock 50 unidades</p>
                          <p>location: {character.location.name}</p>
                        </div>
                     </div>
                    </div>
        
               </div>
            );
        };
        
export default ItemDetail;