const SET_EDITOR_STATE = 'SET_EDITOR_STATE';

const initialState = {
  editor: null,
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDITOR_STATE:
      return {
        ...state,
        editor: action.payload,
      };
    default:
      return state;
  }
};

// ================================================================================================
export const setEditorState = (payload) => ({ type: SET_EDITOR_STATE, payload });
// ================================================================================================

export default editorReducer;
