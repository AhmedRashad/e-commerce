import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  meesage: "",
};
// Reagister uaser
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const meesage =
        (error.response &&
          error.response.data &&
          error.response.data.meesage) ||
        error.meesage ||
        error.toString();
      return thunkAPI.rejectWithValue(meesage);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const meesage =
      (error.response && error.response.data && error.response.data.meesage) ||
      error.meesage ||
      error.toString();
    return thunkAPI.rejectWithValue(meesage);
  }
});
export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const meesage =
      (error.response && error.response.data && error.response.data.meesage) ||
      error.meesage ||
      error.toString();
    return thunkAPI.rejectWithValue(meesage);
  }
});
export const getUser = createAsyncThunk("auth/getUser", async (thunkAPI) => {
  try {
    return await authService.getUser();
  } catch (error) {
    const meesage =
      (error.response && error.response.data && error.response.data.meesage) ||
      error.meesage ||
      error.toString();
    return thunkAPI.rejectWithValue(meesage);
  }
});
 


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.meesage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.user = null;

      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.meesage = action.payload;
        state.user = null;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
