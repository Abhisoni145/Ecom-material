const ProductReducer = (state, action) => {

    switch (action.type) {
        case "FETCH_PRODUCTS": {
            return {
                ...state,
                products: action.payload,
            }
        }
        case "FETCH_PRODUCT": {
            return {
                ...state,
                product: action.payload,
            }
        }
        case "RESET_PRODUCT_STATE": {
            return {
                ...state,
                product:null,
            }
        }
    }
}



export default ProductReducer;