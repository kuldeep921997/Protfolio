import { createSlice } from '@reduxjs/toolkit';
import projectsData from '../../data/projects.json';
import { Project } from '../../types';

interface ProjectsState {
  projects: Project[];
  selectedProject: Project | null;
}

const initialState: ProjectsState = {
  projects: projectsData.projects as Project[],
  selectedProject: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
});

export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;

