import { RootState } from '../../store';

export const selectItems = (state: RootState) => state.items;

export const selectItem = (state: RootState, id: number) =>
  selectItems(state).find((item) => item.id === id);

export const selectFilteredItems = (state: RootState) => {
  const criteria = state.listControls.filter;
  const items = selectItems(state);
  return items.filter(
    (item) =>
      criteria === '' ||
      item.title.toLowerCase().includes(criteria.toLowerCase()) ||
      item.description.toLowerCase().includes(criteria.toLowerCase()),
  );
};
