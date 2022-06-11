import React, { useState } from 'react'

const ItemCount = ({initial, numero, onAdd}) => {
    const [count, setCount] = useState(initial)
    const sumar = () => {
        if (count < numero ) {
            setCount(count + 1)
        } else {
            alert("No puedes agregar mas productos")
        }
    }
    const restar = () => {
      count > initial ? setCount(count - 1) : alert("No puedes agregar mas productos")
    }
    const reset = () => {
        setCount(initial)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={() => onAdd(reset)}>Reset</button>
        <button onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;
