import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [userArr, setUserArr] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(1);
  const [addPostArr, setAddPostArr] = useState([]);
  const [addPostCount, setAddPostCount] = useState(1);

  return (
    <CartContext.Provider
      value={{
        userArr,
        setUserArr,
        loggedIn,
        setLoggedIn,
        count,  
        setCount,
        addPostArr,
        setAddPostArr,
        addPostCount,
        setAddPostCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
