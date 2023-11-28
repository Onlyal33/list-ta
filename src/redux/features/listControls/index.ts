import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ListControls } from '../../../types';

const initialState: ListControls = { filter: '', sortOrder: 'Default' };

const listControlsSlice = createSlice({
  name: 'listControls',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<ListControls['filter']>) {
      state.filter = action.payload;
    },
    setSortOrder(state, action: PayloadAction<ListControls['sortOrder']>) {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  setFilter,
  setSortOrder,
} = listControlsSlice.actions;

export default listControlsSlice.reducer;
