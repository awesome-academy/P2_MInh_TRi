
const initialState = {
    products: [],
    filter: [],
    error: false,
    loading: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTSUCCESS': {
            return {
                ...state,
                products : action.dataProduct,
                filter: action.dataProduct
            }
        }
        case 'COMINGSOON_PRODUCTS' : {
            return {
                ...state,
                filter : action.product,
            }
        }
        case 'SHOWING_PRODUCTS' : {
            return {
                ...state,
                filter : action.product,
            }
        }
        default: 
            return state;
    }
}

export default productReducer;