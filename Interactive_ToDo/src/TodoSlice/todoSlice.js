import {createSlice} from  '@reduxjs/toolkit'

let initialVal = {
    todoArr: []
}

let slice = createSlice({
    name: 'Blog_Todo',
    initialState: initialVal,

    reducers:{
        addTodo: (state, action) => {
            console.log("Error in add todo", action.payload);
            state.todoArr.push(action.payload)

            console.log("Added successfully");
            
        },
        updateTodo: (state,action) => {
            let updatedTodo = action.payload
            state.todoArr.map( (item) => {
                if(item.id === updatedTodo.id){
                    item.todoText = updateTodo.todoText
                }
                return item;
        })
        },
        deleteTodo: (state,action) => {
            let id = action.payload
            state.todoArr.filter( (item) => item.id === id)
        }
    }
})

export const {addTodo, updateTodo, deleteTodo} = slice.actions
export default slice.reducer;