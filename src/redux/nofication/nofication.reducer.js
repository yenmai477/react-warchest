import NoficationActionTypes from "./nofication.types";

const INITIAL_STATE = {
  nofications: [],
  noficationDetail: null,
};

const noficationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NoficationActionTypes.GET_NOFICATION_DETAIL_SUCCESS:
    case NoficationActionTypes.ADD_NOFICATION_SUCCESS:
    case NoficationActionTypes.UPDATE_NOFICATION_DETAIL_SUCCESS:
      return {
        ...state,
        noficationDetail: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default noficationReducer;
