import NoficationActionTypes from "./nofication.types";

const INITIAL_STATE = {
  nofications: [],
  loading: true,
  error: null,
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
        loading: false,
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
    case NoficationActionTypes.SET_NOFICATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default noficationReducer;
