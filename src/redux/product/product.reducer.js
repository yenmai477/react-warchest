import ProductActionTypes from "./product.types";

const INITIAL_STATE = {
  totalProducts: 0,
  bestPriceProduct: null,
  products: [],
  productDetails: null,
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
    case ProductActionTypes.GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case ProductActionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
        error: null,
      };

    case ProductActionTypes.CLEAR_PRODUCT_DETAIL:
      return {
        ...state,
        productDetails: null,
      };
    default:
      return state;
  }
};

export default productReducer;
