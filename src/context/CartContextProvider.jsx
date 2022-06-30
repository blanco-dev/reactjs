import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createContext, useState } from "react";
import db from "../firebase";

export const CartContext = createContext({});

const dateOptions = {
  day: "numeric",
  year: "numeric",
  month: "long",
};

const CartContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState(
    localStorage.getItem("orders")
      ? JSON.parse(window.localStorage.getItem("orders"))
      : []
  );

  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(window.localStorage.getItem("cartItems"))
      : []
  );
  const [categories, setCategories] = useState([]);

  const getAllBooks = async (category = null) => {
    let itemsCollection;
    if (!category) {
      itemsCollection = collection(db, "books");
    } else {
      itemsCollection = query(
        collection(db, "books"),
        where("categories", "array-contains", category)
      );
    }
    const items = await getDocs(itemsCollection);

    const booksArray = items.docs.map((book) => {
      const item = {
        id: book.id,
        ...book.data(),
        date: new Date(book.data().date.seconds * 1000).toLocaleDateString(
          "en-US",
          dateOptions
        ),
      };
      return item;
    });
    return booksArray;
  };

  const getOrders = async () => {
    const ordersCollection = collection(db, "orders");
    const items = await getDocs(ordersCollection);
    const ordersArray = items.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));
    window.localStorage.setItem("orders", JSON.stringify(ordersArray));
    setOrders(ordersArray);
    return ordersArray;
  };

  const getCategories = async () => {
    const booksArray = await getAllBooks();
    const arrayCategories = booksArray.map((book) => book.categories);
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
      const data = [...cartItems, newItem];

      window.localStorage.setItem("cartItems", JSON.stringify(data));
      setCartItems(data);
    }
  };

  const addOrder = async (order) => {
    if (order) {
      const ordersCollection = collection(db, "orders");
      const res = await addDoc(ordersCollection, order);
      const data = [...orders, res.id];
      setOrders(data);
      window.localStorage.setItem("orders", JSON.stringify(data));
      window.localStorage.setItem("cartItems", JSON.stringify([]));
      setCartItems([]);
      return res.id;
    }
    return null;
  };

  const removeItem = (id) => {
    if (isInCart(id)) {
      const newArray = cartItems?.filter((item) => item.id != id);

      window.localStorage.setItem("cartItems", JSON.stringify(newArray));
      setCartItems(newArray);
    }
  };
  const clear = () => {
    window.localStorage.setItem("cartItems", JSON.stringify([]));
    setCartItems([]);
  };
  const isInCart = (id) => {
    return cartItems?.some((item) => item.id === id);
  };
  const findBook = async (id) => {
    const bookDOC = doc(db, "books", id);
    const bookDB = await getDoc(bookDOC);
    return {
      id: bookDB.id,
      ...bookDB.data(),
      date: new Date(bookDB.data().date.seconds * 1000).toLocaleDateString(
        "en-US",
        dateOptions
      ),
    };
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
        books,
        cartItems,
        categories,
        orders,
        getAllBooks,
        quantityCart,
        getOrders,
        setBooks,
        addItem,
        addOrder,
        removeItem,
        isInCart,
        clear,
        totalPriceCart,
        findBook,
        getCategories,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
