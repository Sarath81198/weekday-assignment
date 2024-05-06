import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: [],
  reducers: {
    addJobs: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addJobs } = jobsSlice.actions;
