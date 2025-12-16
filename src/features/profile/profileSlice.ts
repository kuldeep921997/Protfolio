import { createSlice } from '@reduxjs/toolkit';
import profileData from '../../data/profile.json';
import { Metric } from '../../types';

interface ProfileState {
  metrics: Metric[];
}

const initialState: ProfileState = {
  metrics: profileData.metrics as Metric[],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export default profileSlice.reducer;

