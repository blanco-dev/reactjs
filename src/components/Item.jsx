import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Item = ({producto})=>{
    const {image,title,description,price}=producto
    

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
      <Button  className='btn btn-dark' variant="primary">ver detalles</Button>
    </Card.Body>
    </Card>
    )
}
  
export default Item;