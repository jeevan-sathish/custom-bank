import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Signup {
  name: string;
  email: string;
  password: string;
}
interface Signin {
  email: string;
  password: string;
}

interface AuthResponse {
  id: number;
  name: string;
  email: string;
  cb_access_token: string;
  cb_refresh_token: string;
}

interface AuthState {
  user: AuthResponse | null;
  loading: boolean;
  error: string | null;
}
export const signupUser = createAsyncThunk<AuthResponse, Signup>(
  "auth/signup",
  async (data: Signup) => {
    const response = await axios.post("http://localhost:8000/signup", data);
    return response.data;
  },
);

export const signinUser = createAsyncThunk<AuthResponse, Signin>(
  "auth/signin",
  async (data: Signin) => {
    const response = await axios.post("http://localhost:8000/signin", data);
    return response.data;
  },
);
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state) => {
        state.loading = false;
        state.error = "signUp failed";
      });

    builder
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signinUser.rejected, (state) => {
        state.loading = false;
        state.error = "signin failed";
      });
  },
});

export default AuthSlice.reducer;
