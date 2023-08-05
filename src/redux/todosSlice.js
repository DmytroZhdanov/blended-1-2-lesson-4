import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",

  initialState: {
    items: [],
  },

  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
