import {createSlice} from  '@reduxjs/toolkit'

let initialVal = {
    todoArr: [],
    todoToEdit: null
}

let slice = createSlice({
    name: 'Blog_Todo',
    initialState: initialVal,

    reducers:{
        addTodo: (state, action) => {
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
            let obj = action.payload
            console.log("obj hwre ", obj);
            
            state.todoArr.filter( (item) => item.id !== obj.id)
        },
        getTodoToEdit: (state,action) => {
            state.todoToEdit = action.payload
        }
    }
})

export const {addTodo, updateTodo, deleteTodo, getTodoToEdit} = slice.actions
export default slice.reducer;