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
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
