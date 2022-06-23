import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const clothesArray = [
    {
      id: 1,
      name: "Remera con bolso",
      desc: "Lacoste y Gucci",
      info: "Remera elegante sport",
      photo: "1.jpeg",
      stock: 12,
      price: 3000,
      categories: ["remeras"],
    },
    {
      id: 2,
      name: "Remera con bolso",
      desc: "Lacoste y Gucci",
      info: "Remera elegante sport",
      photo: "2.jpeg",
      stock: 0,
      price: 3500,
      categories: ["remeras"],
    },
    {
      id: 3,
      name: "Remera con bolso",
      desc: "Lacoste y Gucci",
      info: "Remera elegante sport",
      photo: "3.jpeg",
      stock: 2,
      price: 7600,
      categories: ["remeras"],
    },
  ];
  const [clothes, setClothes] = useState(clothesArray);
  const [cartItems, setCartItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    const arrayCategories = clothesArray.map((clothe) => clothe.categories);
    const categoriesArray = [].concat(...arrayCategories);
    let uniqueArrayCategories = categoriesArray.filter((element, index) => {
      return categoriesArray.indexOf(element) === index;
    });
    setCategories(uniqueArrayCategories);
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const newItem = {
        ...item,
        quantity,
      };
      setCartItems([...cartItems, newItem]);
    }
  };
  const removeItem = (id) => {
    if (isInCart(id)) {
      const newArray = cartItems?.filter((item) => item.id != id);
      setCartItems(newArray);
    }
  };
  const clear = () => {
    setCartItems([]);
  };
  const isInCart = (id) => {
    return cartItems?.some((item) => item.id === id);
  };
  const findClothe = (id) => {
    return clothesArray.find((item) => item.id == id);
  };
  const quantityCart = () => {
    return cartItems?.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      0
    );
  };
  const totalPriceCart = () => {
    return cartItems?.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price * currentValue.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        clothes,
        cartItems,
        categories,
        quantityCart,
        setClothes,
        addItem,
        removeItem,
        isInCart,
        clear,
        totalPriceCart,
        findClothe,
        getCategories,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
