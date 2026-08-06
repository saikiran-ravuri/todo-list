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
      state.items = state.items.filter((task) => task.id !== action.payload);
    },

    toggleTask: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);

      if (task) {
        task.completed = !task.completed;
      }
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, deleteTask, toggleTask, setFilter } = taskSlice.actions;

export default taskSlice.reducer;
