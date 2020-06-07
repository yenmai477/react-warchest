import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  bestPriceProduct: null,
  products: null,
  product_details: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
