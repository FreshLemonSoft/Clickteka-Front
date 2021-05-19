const SET_USER_DATA = 'SET USER DATA';
const DELETE_USER_DATA = 'DELETE USER DATA';

const initialState = {
  email: '',
  role: 'user',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        email: action.payload.email,
        role: action.payload.role,
      };
    case DELETE_USER_DATA:
      return {
        ...state,
        email: '',
        role: 'user',
      };
    default:
      return state;
  }
};

const setUserData = (payload) => ({ type: SET_USER_DATA, payload });

const deleteUserData = () => ({ type: DELETE_USER_DATA });

export { loginReducer, setUserData, deleteUserData };
