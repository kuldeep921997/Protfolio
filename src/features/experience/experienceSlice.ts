import { createSlice } from '@reduxjs/toolkit';
import experienceData from '../../data/experience.json';
import { Experience } from '../../types';

interface ExperienceState {
  experiences: Experience[];
}

const initialState: ExperienceState = {
  experiences: experienceData.experiences as Experience[],
};

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {},
});

export default experienceSlice.reducer;

