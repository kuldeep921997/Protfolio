import { createSlice } from '@reduxjs/toolkit';
import skillsData from '../../data/skills.json';
import { Skill, EngineeringStrength, Philosophy } from '../../types';

interface SkillsState {
  skills: Skill[];
  strengths: EngineeringStrength[];
  philosophy: Philosophy[];
}

const initialState: SkillsState = {
  skills: skillsData.skills as Skill[],
  strengths: skillsData.strengths as EngineeringStrength[],
  philosophy: skillsData.philosophy as Philosophy[],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;

