import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

store.subscribe(() => {
  const { items } = store.getState().tasks;

  localStorage.setItem("tasks", JSON.stringify(items));
});