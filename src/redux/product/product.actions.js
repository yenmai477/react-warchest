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
export const getProductDetailStart = (params) => ({
  type: ProductActionTypes.GET_PRODUCT_DETAIL_START,
  payload: params,
});

export const searchURLProductStart = ({ url, history }) => ({
  type: ProductActionTypes.SEARCH_URL_PRODUCT_START,
  payload: { url, history },
});

export const getProductDetailSuccess = (product) => ({
  type: ProductActionTypes.GET_PRODUCT_DETAIL_SUCCESS,
  payload: product,
});
export const getProductDetailFail = (error) => ({
  type: ProductActionTypes.GET_PRODUCT_DETAIL_FAIL,
  payload: error,
});
export const clearProductDetails = () => ({
  type: ProductActionTypes.CLEAR_PRODUCT_DETAIL,
});
