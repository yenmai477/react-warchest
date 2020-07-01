import NoficationActionTypes from "./nofication.types";

export const addNoficationSucess = (nofication) => ({
  type: NoficationActionTypes.ADD_NOFICATION_SUCCESS,
  payload: nofication,
});

export const addNoficationFailure = (error) => ({
  type: NoficationActionTypes.SEARCH_PRODUCTS_FAIL,
  payload: error,
});

export const seProductsStart = (nofication) => ({
  type: NoficationActionTypes.ADD_NOFICATION_START,
  payload: nofication,
});
