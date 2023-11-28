import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/items';
import modalReducer from './features/modal';
import listControlsReducer from './features/listControls';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    listControls: listControlsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
