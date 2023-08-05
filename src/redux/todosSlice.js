import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo } from "./operations";

const todosSlice = createSlice({
  name: "todos",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [fetchTodos.pending](state) {
      state.loading = true;
    },
    [fetchTodos.fulfilled](state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    [fetchTodos.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    //==================================

    [addTodo.pending](state) {
      state.loading = true;
    },
    [addTodo.fulfilled](state, action) {
      state.items.push(action.payload);
      state.loading = false;
    },
    [addTodo.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    //=====================================

    [deleteTodo.pending](state) {
      state.loading = true;
    },
    [deleteTodo.fulfilled](state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.loading = false;
    },
    [deleteTodo.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const todosReducer = todosSlice.reducer;
