export const loanReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRE_LOAN":
      return [
        ...state,
        {
          creditorName: action.preLoan.creditorName,
          loanAmount: action.preLoan.loanAmount,
          monthlyFee: action.preLoan.monthlyFee,
          apr: action.preLoan.apr,
        },
      ];
    default:
      return state;
  }
};
