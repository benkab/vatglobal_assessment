import actions from "./actions";

const initState = {
  difference_of_days: null,
  date_range: [],
  isLoadingEvent: null,
  event: null,
  number_of_mondays: null
};

const appReducer = function(state = initState, action) {
  switch (action.type) {
    case actions.SET_DIFFERENCE_OF_DAYS:
      state = { ...state, difference_of_days: action.difference_of_days };
      break;
    case actions.SET_DATE_RANGE:
      state = { ...state, date_range: action.date_range };
      break;
    case actions.SET_IS_LOADING_EVENT:
      state = { ...state, isLoadingEvent: action.isLoadingEvent };
      break;
    case actions.SET_EVENT:
      state = { ...state, event: action.event };
      break;
    case actions.SET_NUMBER_OF_MONDAYS:
      state = { ...state, number_of_mondays: action.number_of_mondays };
      break;
    default:
      return state;
  }
  return state;
};

export default appReducer;
