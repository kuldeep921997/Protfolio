import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import profileReducer from '../features/profile/profileSlice';
import experienceReducer from '../features/experience/experienceSlice';
import projectsReducer from '../features/projects/projectsSlice';
import skillsReducer from '../features/skills/skillsSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    profile: profileReducer,
    experience: experienceReducer,
    projects: projectsReducer,
    skills: skillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

