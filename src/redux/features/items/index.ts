import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ItemInterface } from '../../../types';

const initialState: ItemInterface[] = [];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setInitialState(
      state,
      action: PayloadAction<{
        items: ItemInterface[];
      }>,
    ) {
      state = action.payload.items;
    },
    addItem(state, action: PayloadAction<ItemInterface>) {
      state.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<ItemInterface>) {
      const idToDelete = action.payload.id;
      state = state.filter(({ id }) => id !== idToDelete);
    },
    editItem(state, action: PayloadAction<ItemInterface>) {
      const item = state.find(({ id }) => id === action.payload.id);
      if (item) {
        item.title = action.payload.title;
        item.description = action.payload.description;
      }
    },
  },
});

export const {
  setInitialState,
  addItem,
  deleteItem,
  editItem,
} = itemsSlice.actions;

export default itemsSlice.reducer;
