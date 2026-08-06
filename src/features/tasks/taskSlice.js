import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      });
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;