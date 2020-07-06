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
    case NoficationActionTypes.GET_NOFICATIONS_SUCCESS:
      return {
        ...state,
        nofications: action.payload,
        error: null,
      };
    case NoficationActionTypes.CLEAR_NOFICATION_DETAIL:
      return {
        ...state,
        noficationDetail: null,
      };
    case NoficationActionTypes.DELETE_NOFICATION_DETAIL_SUCCESS:
      console.log(action.payload);

      const nofications = state.nofications.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, nofications };
    default:
      return state;
  }
};

export default noficationReducer;
