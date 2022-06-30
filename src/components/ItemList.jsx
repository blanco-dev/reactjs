import Item from "./Item"

const ItemList = ({booksList}) => {
  return (
    <>
      {
        booksList.map(book => (
          <Item
            key={book.id}
            book={book}
          />
        ))
      }
    </>
  )
}

export default ItemList