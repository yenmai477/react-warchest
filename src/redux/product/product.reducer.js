import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
  totalProducts: 0,
  bestPriceProduct: null,
  products: [],
  product_details: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.data.data,
        totalProducts: action.payload.total,
        error: null,
      };

    case ProductActionTypes.SEARCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
