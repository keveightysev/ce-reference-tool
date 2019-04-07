export const initialState = {
  selectedState: '',
  selectedProfession: '',
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
    default:
      return state;
  }
};
