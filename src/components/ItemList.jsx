import Item from "./Item"

const ItemList = ({clothesList}) => {
  return (
    <>
      {
        clothesList.map(clothe => (
          <Item
            key={clothe.id}
            clothe={clothe}
          />
        ))
      }
    </>
  )
}

export default ItemList