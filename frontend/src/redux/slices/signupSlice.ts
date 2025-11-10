import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SignupPayload {
  name: string;
  phone: string;
  password: string;
}

export const signupUser = createAsyncThunk(
  'signup/signupUser',
  async (userData: SignupPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/v1/signup', userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Signup failed');
    }
  }
);

interface SignupState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: SignupState = {
  loading: false,
  error: null,
  success: false,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    resetSignup: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetSignup } = signupSlice.actions;
export default signupSlice.reducer;