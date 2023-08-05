import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.filter;

// export const selectVisibleTodo = ({ todos: { items }, filter }) => {
//   if (!filter) {
//     return items;
//   }
//   return items.filter((item) =>
//     item.text.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const selectVisibleTodo = createSelector(
  [selectTodos, selectFilter],
  (items, filter) => {
    return items.filter((item) =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
