import Axios from "axios";

export const fetchProducts = () => {
    
    return async (dispatch) => {
        const res = await Axios.get(`http://localhost:3333/products`);
    
        dispatch(setProduct(res.data));
    };
}


export const setProduct = (product) => {
    return {
      type: "FETCH_PRODUCTSUCCESS",
      dataProduct: product,
    };
};

export const commingSoonProduct = (product) => {
    return {
        type: "COMINGSOON_PRODUCTS",
        product,
    }
}

export const showingProduct = (product) => {
    return {
        type: "SHOWING_PRODUCTS",
        product,
    }
}