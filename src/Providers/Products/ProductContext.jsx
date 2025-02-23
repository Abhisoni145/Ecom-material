import { children, createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const initialState = {

        products: [],
        product: null,


    }

   const[state, dispatch] = useReducer(ProductReducer, initialState)





    return (
        <ProductContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContext;