import ProductActionTypes from "./product.types";

export const searchProductsSucess = (products) => ({
  type: ProductActionTypes.SEARCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const searchProductsFailure = (error) => ({
  type: ProductActionTypes.SEARCH_PRODUCTS_FAIL,
  payload: error,
});

export const searchProductsStart = (params) => ({
  type: ProductActionTypes.SEARCH_PRODUCTS_START,
  payload: params,
});
