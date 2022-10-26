/* eslint-disable default-case */
const portfolioReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: state.loading ? true : false,
      }
    case "SET_MENU":
      return {
        ...state,
        menu: state.menu ? false : true,
      }
  }
}

export default portfolioReducer
