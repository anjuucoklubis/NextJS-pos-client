import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartsReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const index = state.findIndex((obj) => obj.id === action.payload.id)
      if (index === -1) {
        return [...state, {...action.payload, quantity: 1}];
      } else {
        return state.map((obj) => {
          if (obj.id === action.payload.id) {
            return {...obj, quantity: obj.quantity + 1}
          } else {
            return obj
          }
        })
      }
    }
    case 'decrease': {
      const index = state.findIndex((obj) => obj.id === action.payload.id)
      if (index !== -1) {
        if (state[index].quantity === 1) {
          return state.filter(obj => obj.id !== action.payload.id)
        } else {
          return state.map((obj) => {
            if (obj.id === action.payload.id) {
              return {...obj, quantity: obj.quantity - 1}
            } else {
              return obj
            }
          })
        }
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = []

const CartProvider = ({ children }) => {
  const [carts, dispatch] = useReducer(cartsReducer, initialState);

  return (
    <CartContext.Provider value={carts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
