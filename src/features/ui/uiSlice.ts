import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  theme: 'light' | 'dark';
  activeSection: string;
  expandedItems: string[];
  sidebarOpen: boolean;
}

const initialState: UiState = {
  theme: (localStorage.getItem('theme') as 'light' | 'dark') || 'dark',
  activeSection: 'overview',
  expandedItems: [],
  sidebarOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    toggleExpandedItem: (state, action: PayloadAction<string>) => {
      const index = state.expandedItems.indexOf(action.payload);
      if (index > -1) {
        state.expandedItems.splice(index, 1);
      } else {
        state.expandedItems.push(action.payload);
      }
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { toggleTheme, setActiveSection, toggleExpandedItem, setSidebarOpen } = uiSlice.actions;
export default uiSlice.reducer;

