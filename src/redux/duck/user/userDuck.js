import { createSlice } from "@reduxjs/toolkit";

//actionCreator
export const setUserCredentials = (obj) => (dispatch) => {
  try {
    return dispatch(setUserCredentialsAction(obj));
  } catch (err) {
    return console.log(err);
  }
};

export const initUserCredentials = () => async (dispatch) => {
  try {
    return dispatch(initUserCredentialsAction());
  } catch (err) {
    return console.log(err);
  }
};

// Slice
const userDuck = createSlice({
  name: "user",
  initialState: {
    name: "",
    surname: "",
    email: "",
    authorities: [],
    addresses: [],
    birthDate: "",
  },
  reducers: {
    setUserCredentialsAction: (state, action) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.authorities = action.payload.authorities;
      state.addresses = action.payload.addresses;
      state.birthDate = action.payload.birthDate;
    },
    initUserCredentialsAction: (state) => {
      state.name = "";
      state.surname = "";
      state.email = "";
      state.authorities = [];
      state.addresses = [];
      state.birthDate = "";
    },
  },
});

export default userDuck.reducer;

// Actions
const { setUserCredentialsAction, initUserCredentialsAction } =
  userDuck.actions;
