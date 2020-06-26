import ProfileActionTypes from './types'

export const fetchProductsSucess = (products) => ({
    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: ProfileActionTypes.FETCH_PROFILE_FAIL,
    payload: error,
});

export const fetchProductsStart = (params) => ({
    type: ProfileActionTypes.FETCH_PROFILE_START,
    payload: params,
});
