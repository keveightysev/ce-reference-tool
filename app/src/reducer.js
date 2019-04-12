export const initialState = {
  selectedState: '',
  selectedProfession: '',
  boards: [],
  role: '',
  isLoading: false,
  isError: false,
  isLoggingIn: false,
  invalidCreds: false,
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
    case 'LOGIN_START':
      return { ...state, isLoggingIn: true };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggingIn: false, role: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, isLoggingIn: false, isError: true };
    case 'INVALID_CREDENTIALS':
      return { ...state, isLoggingIn: false, invalidCreds: true };
    default:
      return state;
  }
};
