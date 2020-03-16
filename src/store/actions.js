const actions = {
  SET_DIFFERENCE_OF_DAYS: "SET_DIFFERENCE_OF_DAYS",
  SET_DATE_RANGE: "SET_DATE_RANGE",
  SET_IS_LOADING_EVENT: "SET_IS_LOADING_EVENT",
  SET_EVENT: "SET_EVENT",
  SET_NUMBER_OF_MONDAYS: "SET_NUMBER_OF_MONDAYS",
  setDifferenceOfDays: difference_of_days => ({
    type: actions.SET_DIFFERENCE_OF_DAYS,
    difference_of_days
  }),
  setDateRange: date_range => ({
    type: actions.SET_DATE_RANGE,
    date_range
  }),
  setIsLoadingEvent: isLoadingEvent => ({
    type: actions.SET_IS_LOADING_EVENT,
    isLoadingEvent
  }),
  setEvent: event => ({
    type: actions.SET_EVENT,
    event
  }),
  setNumberOfMondays: number_of_mondays => ({
    type: actions.SET_NUMBER_OF_MONDAYS,
    number_of_mondays
  })
};

export default actions;
