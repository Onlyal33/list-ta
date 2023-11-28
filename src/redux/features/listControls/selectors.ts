import { RootState } from '../../store';

export const selectFilter = (state: RootState) => state.listControls.filter;

export const selectSortOrder = (state: RootState) => state.listControls.sortOrder;
