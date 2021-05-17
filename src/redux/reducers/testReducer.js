const SET_TEST_STATE = 'SET_TEST_STATE';

const initialState = {
  testState: null,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST_STATE:
      return {
        ...state,
        testState: action.payload,
      };
    default:
      return state;
  }
};

// ================================================================================================
export const setTestState = (payload) => ({ type: SET_TEST_STATE, payload });

// ================================================================================================

export default testReducer;
