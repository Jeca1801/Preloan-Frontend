export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          creditorName: action.book.creditorName,
          loanAmount: action.book.loanAmount,
          monthlyFee: action.book.monthlyFee,
          apr: action.book.apr,
        },
      ];
    default:
      return state;
  }
};
