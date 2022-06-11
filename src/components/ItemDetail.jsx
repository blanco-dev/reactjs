import React from "react";
import { Button, Card } from 'react-bootstrap';

const ItemDetail = ({character}) => {
            return (
              <div className='row'>
                    <div className='col mb-5'>
                      <div className='Card' width='50' >
                        <img src={character.image} alt=''/>
                        <div className='card-body'>
                          <h5 className='card-title'>{character.name}</h5>
                          <hr/>
                          <p>$150</p>
                          <p>stock 50 unidades</p>
                          <p>location: {character.location.name}</p>
                        </div>
                     </div>
                    </div>
        
               </div>
            );
        };
        
export default ItemDetail;