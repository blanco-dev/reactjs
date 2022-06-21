import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const Item = ({producto, numero, onAdd, initial})=>{
    const {image,title,description,price}=producto
    const [count, setCount] = useState(initial)
    const sumar = () => {
      if (count < numero ) {
          setCount(count + 1)
      } else {
          alert("Has añadido 1 elemento al carrito")
      }
  }
  return (

    <Card className='Card' >
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
       </Card.Text>
      <Card.Text className='text'>
      $ {price}
      </Card.Text>
      <button onClick={sumar}>Agregar al carrito</button>
    </Card.Body>
    </Card>
    )
}
  
export default Item;