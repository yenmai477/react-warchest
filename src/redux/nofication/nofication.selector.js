import { createSelector } from "reselect";

const selectNofication = (state) => state.nofication;

export const selectNoficationDetail = createSelector(
  [selectNofication],
  (nofication) => nofication.noficationDetail
);

export const selectUserNofications = createSelector(
  [selectNofication],
  (nofication) => nofication.nofications
);
