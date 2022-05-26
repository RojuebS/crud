const setCurrentCustomer = (state, action) => {
  return {
    ...state,
    currentCustomer: action.payload
  }
}


export default setCurrentCustomer
