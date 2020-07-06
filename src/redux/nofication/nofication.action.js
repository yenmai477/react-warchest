import NoficationActionTypes from "./nofication.types";

export const addNoficationSucess = (nofication) => ({
  type: NoficationActionTypes.ADD_NOFICATION_SUCCESS,
  payload: nofication,
});

export const addNoficationFailure = (error) => ({
  type: NoficationActionTypes.ADD_NOFICATION_FAIL,
  payload: error,
});

export const addNoficationStart = (nofication) => ({
  type: NoficationActionTypes.ADD_NOFICATION_START,
  payload: nofication,
});

export const getNoficationDetailStart = (productId) => ({
  type: NoficationActionTypes.GET_NOFICATION_DETAIL_START,
  payload: productId,
});

export const getNoficationDetailSucess = (nofication) => ({
  type: NoficationActionTypes.GET_NOFICATION_DETAIL_SUCCESS,
  payload: nofication,
});

export const getNoficationDetailFailure = (error) => ({
  type: NoficationActionTypes.GET_NOFICATION_DETAIL_FAIL,
  payload: error,
});

export const updateNoficationDetailStart = (params) => ({
  type: NoficationActionTypes.UPDATE_NOFICATION_DETAIL_START,
  payload: params,
});

export const updateNoficationDetailSucess = (nofication) => ({
  type: NoficationActionTypes.GET_NOFICATION_DETAIL_SUCCESS,
  payload: nofication,
});

export const updateNoficationDetailFailure = (error) => ({
  type: NoficationActionTypes.GET_NOFICATION_DETAIL_FAIL,
  payload: error,
});

export const getNoficationsStart = () => ({
  type: NoficationActionTypes.GET_NOFICATIONS_START,
});

export const getNoficationsSucess = (nofication) => ({
  type: NoficationActionTypes.GET_NOFICATIONS_SUCCESS,
  payload: nofication,
});

export const getNoficationsFailure = (error) => ({
  type: NoficationActionTypes.GET_NOFICATIONS_FAIL,
  payload: error,
});

export const deleteNoficationDetailStart = (id) => ({
  type: NoficationActionTypes.DELETE_NOFICATION_DETAIL_START,
  payload: id,
});

export const deleteNoficationDetailSucess = (id) => ({
  type: NoficationActionTypes.DELETE_NOFICATION_DETAIL_SUCCESS,
  payload: id,
});

export const deleteNoficationDetailFailure = (error) => ({
  type: NoficationActionTypes.DELETE_NOFICATION_DETAIL_FAIL,
  payload: error,
});

export const clearNoficationDetail = () => ({
  type: NoficationActionTypes.CLEAR_NOFICATION_DETAIL,
});
export const setNoficationLoading = () => ({
  type: NoficationActionTypes.SET_NOFICATION_LOADING,
});
