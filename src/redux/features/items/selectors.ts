import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { selectFilter, selectSortOrder } from '../listControls/selectors';

export const selectItems = (state: RootState) => state.items;

export const selectItem = (state: RootState, id: number) =>
  selectItems(state).find((item) => item.id === id);

export const selectFilteredItems = createSelector(
  [selectItems, selectFilter],
  (items, criteria) => {
    return items.filter(
      (item) =>
        criteria === '' ||
        item.title.toLowerCase().includes(criteria.toLowerCase()) ||
        item.description.toLowerCase().includes(criteria.toLowerCase()),
    );
  },
);

export const selectFilteredAndSortedItems = createSelector(
  [selectFilteredItems, selectSortOrder],
  (filteredItems, sortOrder) => {
    switch (sortOrder) {
      case 'Title: A to Z':
        return filteredItems
          .slice()
          .sort((a, b) =>
            a.title.localeCompare(b.title, 'en-US', { numeric: true }),
          );

      case 'Title: Z to A':
        return filteredItems
          .slice()
          .sort((a, b) =>
            b.title.localeCompare(a.title, 'en-US', { numeric: true }),
          );

      case 'Description: A to Z':
        return filteredItems
          .slice()
          .sort((a, b) =>
            a.description.localeCompare(b.description, 'en-US', {
              numeric: true,
            }),
          );

      case 'Description: Z to A':
        return filteredItems
          .slice()
          .sort((a, b) =>
            b.description.localeCompare(a.description, 'en-US', {
              numeric: true,
            }),
          );

      default:
        return filteredItems;
    }
  },
);
