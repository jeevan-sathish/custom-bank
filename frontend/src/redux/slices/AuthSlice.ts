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
    const response = await axios.post(
      "http://localhost:8000/auth/signup",
      data,
    );
    const result = response.data;

    if (!result.cb_access_token || !result.cb_refresh_token) {
      throw new Error("Signup response is missing tokens");
    }

    return result;
  },
);

export const signinUser = createAsyncThunk<AuthResponse, Signin>(
  "auth/signin",
  async (data: Signin) => {
    const response = await axios.post(
      "http://localhost:8000/auth/signin",
      data,
    );
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
        localStorage.setItem("cb_access_token", action.payload.cb_access_token);
        localStorage.setItem(
          "cb_refresh_token",
          action.payload.cb_refresh_token,
        );
        console.log(action.payload);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Signup failed";
      });

    builder
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("cb_access_token", action.payload.cb_access_token);
        localStorage.setItem(
          "cb_refresh_token",
          action.payload.cb_refresh_token,
        );
        console.log(action.payload);
      })
      .addCase(signinUser.rejected, (state) => {
        state.loading = false;
        state.error = "signin failed";
      });
  },
});

export default AuthSlice.reducer;
