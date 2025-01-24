import { createSelector } from '@reduxjs/toolkit';

export const selectList = state => state.todos.items;
export const selectFilter = state => state.filter.filter;
export const selectCurrentTodo = state => state.todos.currentTodo;

export const selectFilteredTodos = createSelector(
  [selectList, selectFilter],
  (list, filter) => {
    return list.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
