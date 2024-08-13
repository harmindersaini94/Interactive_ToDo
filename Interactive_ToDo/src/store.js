import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './TodoSlice/todoSlice'

let todoStore = configureStore({
    reducer: todoReducer
})

export default todoStore;