import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.items = state.items.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = state.items.find(todo => todo.id === action.payload);
    },
    clearCurrentTodo: state => {
      state.currentTodo = null;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  setCurrentTodo,
  clearCurrentTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
