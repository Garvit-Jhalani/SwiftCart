// CartContext.js
import React, { createContext, useReducer, useContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          Image: action.Image,
          Name: action.Name,
          Price: action.Price,
          Quantity: action.Quantity,
          Description: action.Description,
        },
      ];
    case "REMOVE":
      return state.filter((item, index) => index !== action.index);
    case "DROP":
      return [];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, Quantity: action.Quantity, Price: action.Price }
          : item
      );
    case "INCREMENT":
      return state.map((item, index) =>
        index === action.index ? { ...item, Quantity: item.Quantity + 1 } : item
      );
    case "DECREMENT":
      return state.map((item, index) =>
        index === action.index
          ? { ...item, Quantity: Math.max(1, item.Quantity - 1) }
          : item
      );
    default:
      console.log("Error in Reducer");
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
