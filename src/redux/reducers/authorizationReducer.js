const SET_IS_AUTH = 'AUTH/SET_IS_AUTH';

const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: payload,
      };
    default:
      return state;
  }
};

export const setIsAuth = (payload) => ({ type: SET_IS_AUTH, payload });
export default authReducer;
/* export const getToken = (code, state) => async dispatch => {
  try {
    const response = await axios.get(/auth/sudir/code?code=${code}&state=${state})
    localStorage.setItem('Token', response.data)
    dispatch(setIsAuth(true))
  } catch (e) {
    window.console.log(e)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.get(/auth/sudir/logout, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: Bearer ${localStorage.getItem('Token')},
      },
    })
    localStorage.removeItem('Token')
    dispatch(setIsAuth(false))
  } catch (e) {
    window.console.log(e)
  }
} */
