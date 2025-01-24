import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoSlice from './slices/todoSlice';

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoSlice);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
