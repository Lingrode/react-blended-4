import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoSlice from './slices/todoSlice';
import filterSlice from './slices/filterSlice';

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoSlice);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
