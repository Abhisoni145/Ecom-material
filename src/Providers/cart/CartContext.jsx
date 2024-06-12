import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

   

    const initialState = {
        cartItems: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increment= (id) => {
        return {
            type: "INCREMENT",
            payload:id
    
        }
        
    }





    return (
        <CartContext.Provider value={{ ...state, cartDispatch: dispatch,increment }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartContext;