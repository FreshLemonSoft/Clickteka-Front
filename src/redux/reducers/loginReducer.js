const SET_LOGIN = 'SET SIGNUP';

const initialState = {
  email: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

const setSignup = (payload) => ({ type: SET_LOGIN, payload });

export { loginReducer, setSignup };
