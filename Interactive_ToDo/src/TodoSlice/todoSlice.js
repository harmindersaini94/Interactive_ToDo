import { createSlice } from "@reduxjs/toolkit";

let initialVal = {
  todoArr: [],
  todoToEdit: null,
};

let slice = createSlice({
  name: "Blog_Todo",
  initialState: initialVal,

  reducers: {
    addTodo: (state, action) => {
      state.todoArr.push(action.payload);
      localStorage.setItem("todo", JSON.stringify(state.todoArr));
      console.log("Added successfully");
    },
    updateTodo: (state, action) => {
      let updatedTodo = action.payload;

      console.log("Edit object in Slice ", updatedTodo);

      state.todoArr = state.todoArr.map((item) =>
        // item.id === updatedTodo.id ? item.todoText = updateTodo.todoText : item
        item.id === updatedTodo.id
          ? { ...item, todoText: updatedTodo.todoText }
          : item
      );

      // Clearing the editObj
      state.todoToEdit = null;

      // Updating Local Storage as well
      localStorage.setItem("todo", JSON.stringify(state.todoArr));
    },
    deleteTodo: (state, action) => {
      let obj = action.payload;
      // Note here, I was not getting the result, bcoz filter create and returns a new array, so need to store it, it does not change the original one
      state.todoArr = state.todoArr.filter((item) => item.id !== obj.id);

      // Updating Local Storage as well
      localStorage.setItem("todo", JSON.stringify(state.todoArr));
    },
    getTodoToEdit: (state, action) => {
      state.todoToEdit = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, getTodoToEdit } = slice.actions;
export default slice.reducer;
