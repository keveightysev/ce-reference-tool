export const initialState = {
  selectedState: 'AL',
  selectedProfession: 'psychologist',
  boards: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_START':
      return { ...state, isLoading: true };
    case 'GET_SUCCESS':
      return { ...state, isLoading: false, boards: action.payload };
    case 'GET_FAILURE':
      return { ...state, isLoading: false, isError: true };
    case 'CHANGE_STATE':
      return { ...state, selectedState: action.payload };
    case 'CHANGE_PROFESSION':
      return { ...state, selectedProfession: action.payload };
    default:
      return state;
  }
};
