const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [action.payload,...state.cartItems],
            };
        
        case "REMOVE_CART":
            return {
                ...state,
                cartItems:state.cartItems.filter((item)=>item.id!==action.payload)
            }
        case "INCREMENT":
            return {
                cartItems: updatecart = state.cartItems.map((itme) => {
                    if (item.id === action.payload) {
                        return{...item,count:item.count+1}
                    }
                })
            }
        



        default:
            return state;
    }
};

export default CartReducer