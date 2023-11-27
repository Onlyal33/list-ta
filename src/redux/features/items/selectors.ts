import { RootState } from '../../store';

export const selectItems = (state: RootState) => state.items;

export const selectItem = (state: RootState, id: number) => selectItems(state).find((item) => item.id === id);
