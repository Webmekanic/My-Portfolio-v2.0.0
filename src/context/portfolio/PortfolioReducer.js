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
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload.projects,
        loading: false,
      }
    default:
      return state
  }
}

export default portfolioReducer
