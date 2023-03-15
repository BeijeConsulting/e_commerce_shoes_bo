import { createSlice } from '@reduxjs/toolkit'

// Action Creator
export const setToken = (obj) => dispatch => {
  try {
    return dispatch(setTokenAction(obj));
  } catch (e) {
    return dispatch(errorTokenAction(e.message));
  }
}


// Action Creator
export const initToken = () => async dispatch => {
  try {
    return dispatch(initTokenAction())
  } catch (e) {
    return dispatch(errorTokenAction(e.message))
  }
}


// Action Creator
export const updateToken = (obj) => async dispatch => {
  try {
    return dispatch(updateTokenAction(obj))
  } catch (e) {
    return dispatch(errorTokenAction(e.message))
  }
}

// Slice
const tokenDuck = createSlice(
  {
    name: 'tokenDuck',
    initialState: {
      token: null,
      name: null,
      error:null
    },
    reducers: {
      setTokenAction: (state, action) => {
        state.token = action.payload.token;
        state.name = action.payload.name;
      },
      initTokenAction: (state, action) => {
        state.token = null;
        state.name = null;
        state.error = null;
      },
      updateTokenAction: (state, action) => {
        state.token = action.payload.token;
      },
      errorTokenAction: (state, action) => {
        state.error = action.payload.error;
      },
    },
  }
);

export default tokenDuck.reducer

// Actions
const {
  setTokenAction,
  initTokenAction,
  updateTokenAction,
  errorTokenAction
} = tokenDuck.actions