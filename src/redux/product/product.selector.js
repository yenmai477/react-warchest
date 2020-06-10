import { createSelector } from "reselect";

const selectProducts = (state) => state.product;

export const selectSearchProducts = createSelector(
  [selectProducts],
  (product) => product.products
);

export const selectTotalProducts = createSelector(
  [selectProducts],
  (product) => product.totalProducts
);
