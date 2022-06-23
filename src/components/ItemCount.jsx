import React from 'react'

const ItemCount = ({substractQuantity, handleChange, addQuantity, inputNumber}) => {
  return (

    <div className="d-flex text-center w-100 item-count">
      <button
        type="button"
        onClick={substractQuantity}
      ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </button>
      <input
        type="number"
        onChange={e => handleChange(e.target.value)}
        value={inputNumber}
      />
      <button
        type="button"
        onClick={addQuantity}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  )
}

export default ItemCount