import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/items';
import modalReducer from './features/modal';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
