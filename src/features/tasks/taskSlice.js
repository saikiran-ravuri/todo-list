import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
