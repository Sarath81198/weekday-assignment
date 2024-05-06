import { configureStore } from '@reduxjs/toolkit';
import { jobsSlice } from './pages/JobListing/slice/JobListing.slice';

export const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer
},
});
